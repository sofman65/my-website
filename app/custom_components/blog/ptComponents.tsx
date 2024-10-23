import React from 'react';
import { CodeBlock } from './CodeBlock';
import Image from 'next/image';
import { urlFor } from "@/lib/sanity";

export const ptComponents = {
    types: {
        code: ({ value }: { value: { language?: string; code: string } }) => {
            return <CodeBlock codeExample={{ language: value.language || 'text', code: value.code }} />;

        },
        image: ({ value }: { value?: { asset: { url: string }; alt?: string } }) => {
            if (value) {
                return (
                    <div className="relative w-full h-64 my-4">
                        <Image
                            src={urlFor(value).url()}
                            alt={value.alt || ' '}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                );
            }
            return null;
        },
    },
    marks: {
        link: ({ children, value }: { children: React.ReactNode; value?: { href: string } }) => {
            const href = value?.href || '#';
            const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a href={href} rel={rel} className="text-blue-400 hover:underline">
                    {children}
                </a>
            );
        },
        internalLink: ({ children, value }: { children: React.ReactNode; value?: { slug: { current: string } } }) => {
            const slug = value?.slug.current || '';
            return (
                <a href={`/blog/${slug}`} className="text-blue-400 hover:underline">
                    {children}
                </a>
            );
        },
    },
    block: {
        h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }: { children: React.ReactNode }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
        h3: ({ children }: { children: React.ReactNode }) => <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>,
        normal: ({ children }: { children: React.ReactNode }) => <p className="mb-4">{children}</p>,
        blockquote: ({ children }: { children: React.ReactNode }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">{children}</blockquote>
        ),
    },
    list: {
        bullet: ({ children }: { children: React.ReactNode }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
        number: ({ children }: { children: React.ReactNode }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: { children: React.ReactNode }) => <li className="mb-2">{children}</li>,
        number: ({ children }: { children: React.ReactNode }) => <li className="mb-2">{children}</li>,
    },
};
