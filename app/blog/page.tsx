import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectContainer } from "@/app/custom_components/TypewriterEffectContainer";
import * as React from "react";
// import { Logo } from "@/components/Logo";

export const metadata = {
    title: 'Blog | space-slam.com',
    description: 'Learn about the latest trends in AI, ML and Technology.'
}

async function getData() {
    const query = `*[_type == "blog"] | order(publishedAt desc) {
        publishedAt,
        title,
        "slug": slug.current,
        image,
        snippet,
    }`;

    const data = await client.fetch(query);
    return data;
}

export default async function Blog() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-gradient-to-b text-white">
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
                            <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                <Link href={`/blog/${blog.slug}`} passHref>
                                    <div className="relative h-48 md:h-64">
                                        <Image
                                            className="object-cover transition-transform duration-300 hover:scale-110"
                                            src={urlFor(blog.image).url()}
                                            alt={blog.title}
                                            layout="fill"
                                        />
                                        <div className="absolute top-0 left-0 bg-blue-500 text-white p-2 rounded-br-lg">
                                            <p className="font-bold text-xl">{day}</p>
                                            <p className="text-sm">{month}</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <h2 className="font-bold text-xl mb-2 hover:text-blue-400 transition-colors duration-300">
                                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h2>
                                    <p className="text-gray-300 mb-4">{blog.snippet}</p>
                                    <Link href={`/blog/${blog.slug}`} passHref>
                                        <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Read more</span>
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
