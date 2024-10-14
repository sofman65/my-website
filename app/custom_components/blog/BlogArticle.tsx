"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import SocialMediaShare from "../blog/SocialMediaShare";
import FeaturedVideos from "../blog/FeaturedVideos";
import RecentArticles from "../blog/RecentArticles";
import { TracingBeam } from "../ui/tracing-beam";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ptComponents } from './ptComponents'; 
import { CodeBlock } from "./CodeBlock";

export const revalidate = 60;

export default function BlogArticle({ data, recentData }: { data: any, recentData: any[] }) {
    const [aspectRatio, setAspectRatio] = useState(16 / 9);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) {
                setAspectRatio(16 / 7);
            } else if (screenWidth >= 1024) {
                setAspectRatio(16 / 9);
            } else if (screenWidth >= 768) {
                setAspectRatio(16 / 13);
            } else {
                setAspectRatio(16 / 20);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!data || !data.publishedAt) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
                <h1 className="text-3xl font-bold text-red-500">No blog post found</h1>
                <p>The blog post you&apos;re looking for does not exist or may have been removed.</p>
            </div>
        );
    }

    const publishedDate = new Date(data.publishedAt);
    const formattedDate = format(publishedDate, "dd MMMM yyyy", { locale: el }) || "Unknown Date";

    return (
        <div className="min-h-screen text-white font-sans">
            <div className="relative w-full" style={{ aspectRatio: aspectRatio }}>
                <Image
                    src={urlFor(data.image).url()}
                    fill
                    alt={data.title}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.title}</h1>
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src={data.author?.image ? urlFor(data.author.image).url() : undefined} />
                            <AvatarFallback>{data.author?.name ? data.author.name[0] : 'A'}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{data.author?.name || 'Anonymous'}</p>
                            <p className="text-sm text-gray-300">{formattedDate}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    <TracingBeam className="lg:w-2/3">
                        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
                            <SocialMediaShare url={`https://www.spaceslam.com/blog/${data.slug}`} />
                            <div className="prose prose-invert max-w-none">
                                <PortableText
                                    value={data.content}
                                    components={ptComponents as unknown as PortableTextReactComponents} 
                                />
                            </div>
                        </div>
                    </TracingBeam>
                    <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-20 lg:self-start">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle>Recent Articles</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RecentArticles recentData={recentData} />
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle>Featured Videos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FeaturedVideos />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}



