import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({

        getPosts:builder.query({
            query:() => 'posts',
            providesTags: ['Posts']
        }),

        getPost:builder.query({
            query:(postID)=> `users/single/${postID}`,
            // providesTags: ['Posts']
        }),

        // Working on this one
        addPost:builder.mutation({
            query:(post) => ({
                url: 'posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags:['Posts']
        }),

        updatePost: builder.mutation({
            query:(post)=>({
                url: `post/update/${post.postID}`,
                method: 'PUT',
                body: post

            }),
            invalidatesTags: ['Posts']
        }),

        deletePost: builder.mutation({
            query:(postID) => ({
                url: `post/delete/${postID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Posts']
        })
    })
})
export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation}=postApi