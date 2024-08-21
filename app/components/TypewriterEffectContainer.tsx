"use client";
import { TypewriterEffect } from "@/app/components/ui/typewriter-effect";

export function TypewriterEffectContainer() {
    const words = [
        { text: "Learn", className: "text-[#4B9CD3]" }, // Light Blue
        { text: "Build", className: "text-[#4B9CD3]" }, // Tomato
        { text: "Innovate", className: "text-[#4B9CD3]" }, // Gold
        { text: "with", className: "text-[#4B9CD3]" }, // Green Yellow
        { text: "Sofianos.", className: "text-[#4B9CD3]" }, // Orange Red 
    ];

    return (
        <div className="flex flex-col items-center justify-center h-[40rem]">
            <TypewriterEffect words={words} className="text-black dark:text-white" />
        </div>
    );
}