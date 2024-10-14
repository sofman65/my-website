import { client, urlFor } from '@/lib/sanity';
import BlogArticle from '@/app/custom_components/blog/BlogArticle';
import { Metadata } from 'next';

export const revalidate = 1;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const query = `*[_type == "blog" && slug.current == $slug] {
        title,
        image,
        snippet
    }[0]`;

    const data = await client.fetch(query, { slug: params.slug });

    if (!data) {
        console.error(`No data found for slug: ${params.slug}`);
        return {
            title: 'Blog Post Not Found',
            description: 'No description available',
        };
    }

    return {
        title: data.title || 'Untitled',
        description: data.snippet || 'No description available',
        openGraph: {
            images: [{ url: data.image ? urlFor(data.image).url() : '' }],
        },
    };
}

async function getData(slug: string) {
    const postQuery = `*[_type == "blog" && slug.current == $slug] {
        publishedAt,
        title,
        "slug": slug.current,
        image,
        author,
        content,
        snippet
    }[0]`;

    const recentPostsQuery = `*[_type == "blog" && slug.current != $slug] | order(publishedAt desc) [0...3] {
        title,
        "slug": slug.current,
        snippet,
        image
    }`;

    const data = await client.fetch(postQuery, { slug });
    const recentData = await client.fetch(recentPostsQuery, { slug });

    return { data, recentData };
}

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
    const { data, recentData } = await getData(params.slug);

    if (!data) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">No blog post found for slug: {params.slug}</h1>
            </div>
        );
    }

    return <BlogArticle data={data} recentData={recentData} />;
}
