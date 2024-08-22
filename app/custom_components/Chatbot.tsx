"use client";

import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Dummy function to simulate conversation continuation
const continueConversation = async (input) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id: nanoid(), role: "bot", display: `${input}` };
};

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const conversationEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when a new message is added
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  return (
    <>
      {/* Avatar Button to Toggle Chatbot */}
      <div
        className="fixed bottom-12 right-12 z-50 cursor-pointer"
        onClick={() => setIsChatbotVisible(!isChatbotVisible)}
      >
        <Avatar className="w-16 h-16">
          <AvatarImage alt="Chatbot" src="assets/placeholder-image.webp" />
          <AvatarFallback className="text-black dark:text-white">SL</AvatarFallback>
        </Avatar>
      </div>

      {/* Chatbot Container */}
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

              {/* Chat Content with Gradient Background */}
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
                        <p>{message.display}</p>
                      </div>
                    </div>
                  ))}


                  {isLoading && (
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage alt="Chatbot" src="assets/placeholder-image.webp" />
                        <AvatarFallback>SL</AvatarFallback>
                      </Avatar>
                      <div className="flex items-start flex-col space-y-2 max-w-[70%]">
                        <Skeleton className="h-4 w-3/4 bg-gray-300 dark:bg-gray-950" />
                        <Skeleton className="h-4 w-1/2 bg-gray-300 dark:bg-gray-950" />
                        <Skeleton className="h-4 w-2/3 bg-gray-300 dark:bg-gray-950" />
                      </div>
                    </div>
                  )}

                  {/* Reference to the bottom of the conversation */}}
                  <div ref={conversationEndRef} />
                </div>
              </div>

              {/* Input Section */}
              <div className="bg-gray-100 px-4 py-3 dark:bg-gray-800 rounded-b-xl">
                <form
                  className="flex items-center gap-2"
                  onSubmit={async (event) => {
                    event.preventDefault();
                    setIsLoading(true); // Start loading

                    setConversation((currentConversation) => [
                      ...currentConversation,
                      { id: nanoid(), role: "user", display: input },
                    ]);

                    const message = await continueConversation(input);

                    setConversation((currentConversation) => [
                      ...currentConversation,
                      message,
                    ]);

                    setInput("");
                    setIsLoading(false); // Stop loading
                  }}
                >
                  <Input
                    className="flex-1 rounded-lg bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-950"
                    placeholder="Type your message..."
                    type="text"
                    value={input}
                    onChange={(event) => {
                      setInput(event.target.value);
                    }}
                  />
                  <Button size="sm" variant="primary" type="submit" disabled={isLoading}>
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
