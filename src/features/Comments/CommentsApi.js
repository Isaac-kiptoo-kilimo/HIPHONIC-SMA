import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Comments'],
    endpoints: (builder) => ({

        getComments:builder.query({
            query:() => 'comments',
            providesTags: ['Comments']
        }),

        getComment:builder.query({
            query:(CommentID)=> `comments/Single${CommentID}`,
            providesTags: ['Comments']
        }),

        addComment:builder.mutation({
            query:(comment) => ({
                url: 'comments',
                method: 'POST',
                body: comment
            }),
            invalidatesTags:['Comments']
        }),

        updatePost: builder.mutation({
            query:(comment)=>({
                url: `comment/patch/${comment.CommentID}`,
                method: 'PUT',
                body: comment

            }),
            invalidatesTags: ['Comments']
        }),

        deletePost: builder.mutation({
            query:(CommentID) => ({
                url: `comments/delete/${CommentID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Comments']
        })
    })
})
export const { useGetCommentsQuery, useGetCommentQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation}=commentApi