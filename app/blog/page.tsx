import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectContainer } from "@/app/custom_components/TypewriterEffectContainer";
import * as React from "react";
// import { Logo } from "@/components/Logo";

export const metadata = {
    title: 'Blog | space-slam.com |  ',
    description: 'Learn about the latest trends in AI, ML and Technology.'
}

const query = `*[_type == "blog"] | order(_createdAt) {
    publishedAt,
    title,
    "slug": slug.current,
    image,
    snippet,
}`;

async function getData() {

    const data = await client.fetch(query);
    return data;
}


export default async function Blog() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-12">
                    <TypewriterEffectContainer />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((blog: any, idx: number) => {
                        const date = new Date(blog.publishedAt);
                        const day = date.getDate().toString().padStart(2, "0");
                        const month = date.toLocaleString('default', { month: 'short' });

                        return (
                            <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                                <Link href={`/blog/${blog.slug}`} passHref>
                                    <div className="relative h-48 md:h-64">
                                        <Image
                                            className="object-cover"
                                            src={urlFor(blog.image).url()}
                                            alt={blog.title}
                                            layout="fill"
                                        />
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-16 h-16  flex flex-col justify-center items-center mr-4">
                                            <p className="font-bold text-2xl">{day}</p>
                                            <p className="font-bold text-sm">{month}</p>
                                        </div>
                                        <h2 className="font-bold text-xl">{blog.title}</h2>
                                    </div>
                                    <p className="text-gray-300 mb-4">{blog.snippet}</p>
                                    <Link href={`/blog/${blog.slug}`} passHref>
                                        <span className="text-blue-400 hover:underline">Read more</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


// FIX THIS GODAMN SCRIPT
