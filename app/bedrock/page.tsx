"use client";

import { useState } from "react";

export default function BedrockTestPage() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setResponse(null);

        try {
            const res = await fetch("/api/bedrock-test", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userInput: input,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to fetch");
            }

            const reader = res.body?.getReader();
            const decoder = new TextDecoder();
            let result = "";

            while (true) {
                const { done, value } = await reader?.read()!;
                if (done) break;
                result += decoder.decode(value);
                setResponse(result);
            }
        } catch (error) {
            setResponse("Error: " + (error instanceof Error ? error.message : String(error)));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Bedrock Test API</h1>
            <textarea
                className="w-full max-w-xl p-2 border rounded mb-4 text-dark"
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your message here"
            />
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-dark rounded disabled:opacity-50"
                disabled={loading || !input}
            >
                {loading ? "Loading..." : "Submit"}
            </button>
            {response && (
                <div className="mt-4 w-full max-w-xl p-4 bg-gray-100 text-black rounded">
                    <h2 className="text-lg font-semibold">Response:</h2>
                    <pre className="whitespace-pre-wrap text-white">{response}</pre>
                </div>
            )}
        </div>
    );
}
