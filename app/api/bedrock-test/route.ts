import { NextResponse, NextRequest } from "next/server";
import { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime";

// Define the system prompt
const systemPrompt = "You are a helpful assistant.";

const bannedWords = ["inappropriateWord1", "inappropriateWord2"];

function sanitizeInput(input: string): string {
    return input.replace(/[^a-zA-Z0-9 .,!?\n]/g, "");
}

function moderateContent(input: string): string {
    for (const word of bannedWords) {
        if (input.includes(word)) {
            return "Your input contains inappropriate content.";
        }
    }
    return input;
}

export async function POST(req: NextRequest) {
    const client = new BedrockRuntimeClient({ region: "us-east-1" });

    try {
        const data = await req.json();
        const userInput = sanitizeInput(data.userInput);
        const moderatedInput = moderateContent(userInput);

        // If moderation flagged the input, return immediately
        if (moderatedInput !== userInput) {
            return new NextResponse(moderatedInput, { status: 400 });
        }

        const modelId = "anthropic.claude-3-haiku-20240307-v1:0";

        const payload = {
            anthropic_version: "bedrock-2023-05-31",
            max_tokens: 2048,
            system: systemPrompt,
            messages: [
                { "role": "user", "content": moderatedInput },
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

                    if (response.body) {
                        for await (const item of response.body) {
                            const chunk = item.chunk ? JSON.parse(new TextDecoder().decode(item.chunk.bytes)) : null;
                            if (chunk.type === "content_block_delta") {
                                const text = chunk.delta.text;
                                completeMessage += text;
                                controller.enqueue(text);
                            }
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
