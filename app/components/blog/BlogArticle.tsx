"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AspectRatio } from "@/app/components/ui/aspect-ratio";
import { PortableText } from "next-sanity";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import { DotBackground } from "@/app/components/ui/dotBackground";
import { TracingBeam } from "@/app/components/ui/tracing-beam";
import SocialMediaShare from "@/app/components/blog/SocialMediaShare";
import FeaturedVideos from "@/app/components/blog/FeaturedVideos";
import RecentArticles from "@/app/components/blog/RecentArticles";

export const revalidate = 60;

export default function BlogArticle({ data, recentData }: { data: any, recentData: any[] }) {
    const [aspectRatio, setAspectRatio] = useState(16 / 9);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) {
                // xl
                setAspectRatio(16 / 7);
            } else if (screenWidth >= 1024) {
                // lg
                setAspectRatio(16 / 9);
            } else if (screenWidth >= 768) {
                // md
                setAspectRatio(16 / 13);
            } else {
                // sm and below
                setAspectRatio(16 / 20);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!data || !data.publishedAt) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold text-red-500">No blog post found</h1>
                <p>The blog post you&apos;re looking for does not exist or may have been removed.</p>
            </div>
        );
    }

    const publishedDate = new Date(data.publishedAt);
    const formattedDate = format(publishedDate, "dd MMMM yyyy", { locale: el }) || "Unknown Date";

    return (
        <>
            <div className="z-[-1] w-full h-full fixed">
                {" "}
                <DotBackground />{" "}
            </div>
            <div className="relative max-w-full">
                <AspectRatio ratio={aspectRatio} className="relative bg-black shadow-2xl">
                    <Image
                        src={urlFor(data.image).url()}
                        fill
                        alt="Image"
                        className="object-cover opacity-60"
                    />
                    <div className="relative z-20 px-8 mb-24 md:px-20 w-full flex justify-center">
                        {/* <Logo /> */}
                    </div>
                    <h1 className="px-8 lg:px-20 w-full text-left absolute bottom-8 md:bottom-16 left-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl drop-shadow-2xl font-extrabold text-white z-10">
                        {data.title} <br />
                        <span className="text-sm lg:text-base">
                            {formattedDate} | {data.author}
                        </span>
                    </h1>
                </AspectRatio>
            </div>
            <div className="px-4 py-12 lg:py-20 lg:px-20 grid grid-cols-1 xl:grid-cols-3 gap-y-12">
                <TracingBeam className="px-8 col-span-1 lg:col-span-3 xl:col-span-2">
                    <div className="bg-black font-thin prose first-letter:text-9xl first-letter:font-bold first-letter:text-blue-500 first-letter:leading-none first-letter:float-left first-letter:mr-6 prose-h3:drop-shadow-xl prose-h3:text-3xl prose-h3:font-light prose-2xl p-10 lg:p-20 rounded-3xl shadow-lg">
                        <SocialMediaShare url={`https://www.yourwebsite.com/blog/${data.slug}`} />
                        <PortableText value={data.content} />
                    </div>
                </TracingBeam>
                <div className="flex flex-col gap-12">
                    <RecentArticles recentData={recentData} />
                    <FeaturedVideos />
                </div>
            </div>
        </>
    );
}
