import {
    createClient,
    type ClientConfig,
    type QueryParams,
} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

export async function sanityFetch<QueryResponse>({
    query,
    qParams = {},
    tags,
}: {
    query: string;
    qParams?: QueryParams;
    tags: string[];
}): Promise<QueryResponse> {
    return client.fetch<QueryResponse>(query, qParams, {
        cache: "force-cache",
        next: { tags },
    });
}