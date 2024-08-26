import { NextResponse, NextRequest } from "next/server";
import { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime";

// Define the system prompt
const systemPrompt = "You are a helpful assistant.";

export async function POST(req: NextRequest) {
    const client = new BedrockRuntimeClient({ region: "us-east-1" });

    try {
        const data = await req.json();
        const modelId = "anthropic.claude-3-haiku-20240307-v1:0";

        const payload = {
            anthropic_version: "bedrock-2023-05-31",
            max_tokens: 2048,
            system: systemPrompt,
            messages: [
                { "role": "user", "content": data.userInput },  // Corrected content structure
            ],
        };

        const command = new InvokeModelWithResponseStreamCommand({
            contentType: "application/json",
            body: JSON.stringify(payload),
            modelId,
        });

        const stream = new ReadableStream({
            async start(controller) {
                try {
                    const response = await client.send(command);
                    let completeMessage = "";

                    for await (const item of response.body) {
                        const chunk = JSON.parse(new TextDecoder().decode(item.chunk.bytes));
                        if (chunk.type === "content_block_delta") {
                            const text = chunk.delta.text;
                            completeMessage += text;
                            controller.enqueue(text);
                        }
                    }
                } catch (err) {
                    console.error("Error during streaming:", err);
                    controller.error(err);
                } finally {
                    controller.close();
                }
            }
        });

        return new NextResponse(stream, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                Connection: "keep-alive",
            },
        });

    } catch (error) {
        console.error("Error processing the request:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
