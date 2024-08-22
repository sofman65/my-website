import { client } from '@/lib/sanity';
import BlogArticle from '@/app/custom_components/blog/BlogArticle';

export const revalidate = 1;

export async function generateMetadata({ params }: { params: { slug: string } }) {
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
        image: data.image,
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
        return <div>No blog post found for slug: {params.slug}</div>;
    }

    return (
        <>
            <BlogArticle data={data} recentData={recentData} />
        </>
    );
}
