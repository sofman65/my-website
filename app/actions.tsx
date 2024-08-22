import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { nanoid } from "nanoid";
import { prisma } from "@/lib/db";
import { z } from "zod";
import { Skeleton } from "@/components/ui/skeleton";
import { ReactNode } from "react";
import TableComponent from "@/components/TableComponent";
import { sleep } from "@/lib/utils";

// In-memory cache for the system message
let cachedSystemMessage: string | null = null;
export const runtime = 'edge';


export interface MessageContent {
    type: string;
    toolName?: string;
    toolCallId?: string;
    args?: Record<string, any>;
    result?: any;
}

export interface Message {
    id: string;
    role: "user" | "assistant" | "system" | "tool";
    content: string | MessageContent[];
}

export interface ServerMessage {
    role: "user" | "assistant";
    content: string;
    messages?: Message[];
}

export interface ClientMessage {
    id: string;
    role: "user" | "assistant";
    display: ReactNode;
}




export async function continueConversation(input: string) {
    "use server";
    // @ts-ignore
    const history = getMutableAIState<{ messages: Message[] }>();


    const result = await streamUI({
        model: openai("gpt-4o"),
        temperature: 0,
        system: systemMessage,
        messages: [...history.get().messages, { id: nanoid(), role: "user", content: input }],
        text: ({ content, done }) => {
            if (done) {
                history.done({
                    ...history.get(),
                    messages: [
                        ...history.get().messages,
                        { id: nanoid(), role: "assistant", content },
                    ],
                });
            }
            return content;
        },
        tools: {
            event_handler: {
                description: "Fetch and show requested data based on a query.",
                parameters: z.object({
                    conditions: z.array(
                        z.object({
                            column_name: z.string(),
                            column_values: z.array(z.string()),
                        })
                    ),
                }),
                generate: async function* ({ conditions }) {
                    yield (
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-950" />
                            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-950" />
                            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-950" />
                            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-950" />
                            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-950" />
                            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-950" />
                            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-950" />
                            <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-950" />
                        </div>
                    );

                    const whereClause = conditions.reduce((acc: any, condition: any) => {
                        acc[condition.column_name] = {
                            in: condition.column_values,
                        };
                        return acc;
                    }, {});

                    const conditionColumns = conditions.map(condition => condition.column_name);

                    const alwaysSelectedColumns = [
                        "firstName",
                        "lastName",
                        "emailAddress",
                        "mobilePhoneNumber",
                        "bookedFlights",
                    ];

                    const selectedColumns = Array.from(new Set([...alwaysSelectedColumns, ...conditionColumns]));

                    const selectClause = selectedColumns.reduce((acc: any, column: any) => {
                        acc[column] = true;
                        return acc;
                    }, {});

                    const events = await prisma.eventDetails.findMany({
                        select: selectClause,
                        where: whereClause,
                    });

                    const count = events.length;
                    const dataTable = <TableComponent data={events} />;
                    const toolCallId = nanoid();

                    await sleep(1000);

                    history.done({
                        ...history.get(),
                        messages: [
                            ...history.get().messages,
                            {
                                id: nanoid(),
                                role: 'assistant',
                                content: [
                                    {
                                        type: 'tool-call',
                                        toolName: 'event_handler',
                                        toolCallId,
                                        args: { conditions }
                                    }
                                ]
                            },
                            {
                                id: nanoid(),
                                role: 'tool',
                                content: [
                                    {
                                        type: 'tool-result',
                                        toolName: 'event_handler',
                                        toolCallId,
                                        result: events
                                    }
                                ]
                            },
                        ]
                    });

                    return (
                        <div>
                            <p className="py-2">Αριθμός καλεσμένων: {count}</p>
                            {dataTable}
                        </div>
                    );
                },
            },
        },
    });

    return {
        id: nanoid(),
        role: "assistant",
        display: result.value,
    };
}

export type AIState = {
    messages: Message[]
}

export type UIState = {
    display: React.ReactNode
}[]


export const AI = createAI<AIState, UIState>({
    actions: {
        continueConversation,
    },
    initialAIState: { messages: [] },
    initialUIState: [],
});

