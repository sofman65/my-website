import React from "react";
import { Spotlight } from "@/app/custom_components/ui/Spotlight";

export default function QuoteSection() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Simplicity is the Key to Elegance
                </h1>
                <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-normal text-neutral-300 max-w-lg text-center mx-auto">
                    &quot;In both code and design, simplicity brings clarity and elegance.
                    My approach is to create solutions that are not only powerful but also beautifully simple.&quot;
                </p>
            </div>
        </div>
    );
}
