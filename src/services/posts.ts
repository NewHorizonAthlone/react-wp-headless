// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../interfaces'

type PostsResponse = IPost[]

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://newhorizonathlone.org/wp-json/wp/v2/'
    }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPostList: builder.query<PostsResponse, void>({
            query: () => 'posts',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
                        { type: 'Posts', id: 'LIST' },
                    ]
                    : [{ type: 'Posts', id: 'LIST' }],
        }),
        getPostByName: builder.query<IPost, string>({
            query: (id) => `posts/${id}`
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostListQuery, useGetPostByNameQuery } = postApi