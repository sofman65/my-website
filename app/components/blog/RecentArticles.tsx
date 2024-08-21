// components/blog/RecentArticles.tsx
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

const RecentArticles = ({ recentData }: { recentData: any[] }) => {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-lg py-8">
            <h1 className="text-sm text-right mb-8 text-black">⠇⠇ Recent Articles</h1>
            <div className="flex flex-col gap-8">
                {recentData.map((blog, idx) => (
                    <Link
                        key={idx}
                        href={`/blog/${blog.slug}`}
                        className="flex flex-row xl:flex-col 2xl:flex-row gap-8 items-center"
                    >
                        <Image
                            src={urlFor(blog.image).url()}
                            width={200}
                            height={200}
                            alt="Image"
                            className="object-cover h-[100px] w-[100px] xl:w-[200px] 2xl:w-[100px] rounded-md"
                        />
                        <div>
                            <h1 className="text-lg font-bold text-black">{blog.title}</h1>
                            <p className="text-sm text-black">{blog.snippet}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentArticles;
