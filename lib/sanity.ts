import {
    createClient,
    type ClientConfig,
    type QueryParams,
    type SanityClient,
} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not set');
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    throw new Error('NEXT_PUBLIC_SANITY_DATASET is not set');
}

if (!process.env.NEXT_PUBLIC_SANITY_API_VERSION) {
    throw new Error('NEXT_PUBLIC_SANITY_API_VERSION is not set');
}

const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: process.env.NODE_ENV === 'production',
}

export const client: SanityClient = createClient(config)

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
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
    try {
        return await client.fetch<QueryResponse>(query, qParams, {
            cache: "force-cache",
            next: { tags },
        });
    } catch (error) {
        console.error('Error fetching from Sanity:', error);
        throw new Error('Failed to fetch data from Sanity');
    }
}