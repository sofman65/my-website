import React from "react";
import { Meteors } from "../ui/meteors";
import Link from "next/link";

export function CoreOfferings() {
  const offerings = [
    {
      title: "AI Tools",
      description: "Discover cutting-edge AI tools to enhance your projects and workflows.",
      link: "/ai-tools"
    },
    {
      title: "Innovation Hub",
      description: "Join our Innovation Hub to collaborate and create groundbreaking solutions.",
      link: "/blog"
    },
    {
      title: "1 : 1 AI Coaching",
      description: "Explore future trends and insights in AI technology and innovation.",
      link: "/consulting"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-[10rem] md:gap-8 lg:gap-[20rem]">
      {offerings.map((offering, index) => (
        <div key={index} className="w-full max-w-xs relative group">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl transition-transform duration-300 group-hover:scale-100" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start transition-transform duration-300 group-hover:scale-105">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              {offering.title}
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              {offering.description}
            </p>

            <Link href={offering.link} className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white">
              Explore
            </Link>
            <Meteors number={10} />
          </div>
        </div>
      ))}
    </div>
  );
}
