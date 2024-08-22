import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectContainer } from "@/app/custom_components/TypewriterEffectContainer";
import * as React from "react";
// import { Logo } from "@/components/Logo";

export const metadata = {
    title: 'Blog | sof_lam.gr |  ',
    description: 'Το blog του Σοφιανού Λαμπρόπουλου'
}

async function getData() {
    const query = `*[_type == "blog"] | order(_createdAt) {
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
        <>
            <div className="z-[-1] blog-gradient w-full h-full fixed"></div>
            <div className="px-20 flex gap-4 justify-center items-center md:justify-start">
                {/* <Logo /> */}
                <div className="relative pt-30">
                    <TypewriterEffectContainer />
                </div>

            </div>
            <div className="grid place-content-center place-items-center grid-cols-1 min-h-[90vh] lg:grid-cols-2 2xl:grid-cols-3 py-16">
                {data.map((blog: any, idx: number) => {
                    let day = new Date(blog.publishedAt).toLocaleDateString("el-GR", {
                        day: "numeric",
                    });
                    day = day.padStart(2, "0");

                    let month = new Date(blog.publishedAt).toLocaleDateString("el-GR", {
                        month: "short",
                    }); // Remove the period if present
                    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

                    return (
                        <div
                            key={idx}
                            className="flex flex-col pb-16 justify-start px-8 max-w-[500px] h-full"
                        >
                            <div className="relative overflow-hidden rounded-[45px] border-2 border-white border-opacity-25 custom-shadow">
                                <Link href={`/blog/${blog.slug}`} passHref>
                                    <Image
                                        className="h-[400px] object-cover hover:scale-125 hover:opacity-90 transition-all duration-300 ease-in-out"
                                        src={urlFor(blog.image).url()}
                                        alt={blog.title}
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </div>
                            <div className="w-full md:w-[105%] py-8 text-white mt-[-70px] z-20">
                                <div className="flex gap-6 items-center">
                                    <div className="w-24 aspect-square h-24 rounded-full bg-gradient-to-br from-indigo-400 via-blue-500 to-teal-400 flex flex-col justify-center items-center">
                                        <p className="font-bold text-3xl">{day}</p>
                                        <p className="font-bold text-md ml-[1px]">{month}</p>
                                    </div>
                                    <Link href={`/blog/${blog.slug}`} passHref>
                                        <h1 className="font-bold text-xl">{blog.title}</h1>{" "}
                                    </Link>
                                </div>
                                <p className="pl-24 ml-6 font-thin">{blog.snippet}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}


// FIX THIS GODAMN SCRIPT
