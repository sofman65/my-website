"use client";

import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Define the type for a conversation message
type ConversationMessage = {
  id: string;
  role: "user" | "bot";
  display: string;
  quickReplies?: { id: string; label: string; value: string }[];
};


// Quick Replies Component
const QuickReplies = ({ options, onSelect }) => (
  <div className="flex gap-2 mt-2">
    {options.map((option) => (
      <Button
        key={option.id}
        variant="outline"
        size="sm"
        onClick={() => onSelect(option.value)}
      >
        {option.label}
      </Button>
    ))}
  </div>
);

// Typing Indicator Component
const TypingIndicator = () => (
  <div className="flex items-center gap-2">
    <div className="dot-flashing"></div>
    <span className="text-sm text-gray-500">Typing...</span>
    <style jsx>{`
      .dot-flashing {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #000;
        animation: dot-flashing 1s infinite linear alternate;
        animation-delay: 0.5s;
      }

      @keyframes dot-flashing {
        0% {
          background-color: #000;
        }
        50%,
        100% {
          background-color: #ccc;
        }
      }
    `}</style>
  </div>
);

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const conversationEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when a new message is added
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    setConversation((currentConversation) => [
      ...currentConversation,
      { id: nanoid(), role: "user", display: input },
    ]);

    try {
      const response = await fetch("/api/bedrock-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput: input,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from API");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = "";

      while (true) {
        const { done, value } = await reader?.read()!;
        if (done) break;
        result += decoder.decode(value);
      }

      // Example: Adding quick replies to the bot's response
      setConversation((currentConversation) => [
        ...currentConversation,
        {
          id: nanoid(),
          role: "bot",
          display: result,
          quickReplies: [
            { id: nanoid(), label: "Tell me more", value: "Tell me more" },
            { id: nanoid(), label: "Another example", value: "Another example" },
          ],
        },
      ]);
    } catch (error) {
      console.error("Error fetching response from API:", error);
      setConversation((currentConversation) => [
        ...currentConversation,
        { id: nanoid(), role: "bot", display: "Sorry, something went wrong." },
      ]);
    } finally {
      setInput("");
      setIsLoading(false);
    }
  };

  const handleQuickReply = async (value: string) => {
    setInput(value);
    handleSubmit(new Event("submit"));
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div
        className="fixed bottom-12 right-12 z-50 cursor-pointer"
        onClick={() => setIsChatbotVisible(!isChatbotVisible)}
      >
        <Avatar className="w-16 h-16">
          <AvatarImage alt="Chatbot" src="assets/placeholder-image.webp" />
          <AvatarFallback className="text-black dark:text-white">SL</AvatarFallback>
        </Avatar>
      </div>

      {/* <div className="fixed top-12 right-12 z-50">
        <Button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </Button>
      </div> */}

      {isChatbotVisible && (
        <div className="fixed bottom-36 w-full lg:w-1/2 2xl:w-4/12 right-0 px-4 lg:px-12 z-50">
          <div className="cursor-default w-full border shadow-xl rounded-xl">
            <div className="flex h-[32rem] flex-col">
              <header className="flex rounded-t-xl items-center justify-between bg-background px-4 py-3 text-white shadow-md">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage alt="Chatbot" src="assets/placeholder-image.webp" />
                    <AvatarFallback>SL</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg text-black dark:text-white font-medium">
                    Sof Lam
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsChatbotVisible(false)}
                >
                  Close
                </Button>
              </header>

              <div className="h-full overflow-y-scroll backdrop-blur-3xl p-4 bg-gradient-to-b from-gray-800 to-black rounded">
                <div className="flex flex-col gap-4">
                  {conversation.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user"
                        ? "justify-end"
                        : "items-start gap-3"
                        }`}
                    >
                      {message.role !== "user" && (
                        <Avatar>
                          <AvatarImage
                            alt="Chatbot"
                            src="/placeholder-image.webp"
                          />
                          <AvatarFallback>SL</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[70%] rounded-lg p-3 text-sm ${message.role === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800"
                          }`}
                      >
                        <ReactMarkdown
                          className="prose prose-sm dark:prose-dark"
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code({ node, className, children, ...props }) {
                              const match = /language-(\w+)/.exec(className || "");
                              return match ? (
                                <SyntaxHighlighter
                                  style={materialDark}
                                  language={match[1]}
                                  PreTag="div"
                                  {...props}
                                >
                                  {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                              ) : (
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              );
                            },
                          }}
                        >
                          {message.display}
                        </ReactMarkdown>

                        {/* Render Quick Replies if available */}
                        {message.quickReplies && (
                          <QuickReplies
                            options={message.quickReplies}
                            onSelect={handleQuickReply}
                          />
                        )}
                      </div>
                    </div>
                  ))}

                  {isLoading && <TypingIndicator />}

                  <div ref={conversationEndRef} />
                </div>
              </div>

              <div className="bg-gray-100 px-4 py-3 dark:bg-gray-800 rounded-b-xl">
                <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                  <Input
                    className="flex-1 rounded-lg bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-950"
                    placeholder="Type your message..."
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                  />
                  <Button size="sm" variant="default" type="submit" disabled={isLoading}>
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}