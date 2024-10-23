import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

const RecentArticles = ({ recentData }: { recentData: any[] }) => {
    return (
        <div className="bg-gray-800 border-gray-700 p-8 rounded-3xl shadow-lg">
            <h1 className="text-sm text-right mb-8 text-white">⠇⠇ Recent Articles</h1>
            <div className="flex flex-col gap-8">
                {recentData.map((blog, idx) => (
                    <Link
                        key={idx}
                        href={`/blog/${blog.slug}`}
                        className="flex flex-row xl:flex-col 2xl:flex-row gap-8 items-center group"
                    >
                        <Image
                            src={urlFor(blog.image).url()}
                            width={200}
                            height={200}
                            alt="Image"
                            className="object-cover h-[100px] w-[100px] xl:w-[200px] 2xl:w-[100px] rounded-md group-hover:scale-105 transition-transform"
                        />
                        <div>
                            <h1 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{blog.title}</h1>
                            <p className="text-sm text-gray-300">{blog.snippet}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentArticles;
