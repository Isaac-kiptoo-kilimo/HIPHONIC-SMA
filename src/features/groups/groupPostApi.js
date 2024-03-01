import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupPostApi=createApi({
    reducerPath: "groupPostApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['groupPosts'],
    endpoints: (builder)=>({

        getGroupPosts:builder.query({
            query:()=> 'groupposts',
            providesTags: ['groupPosts']
        }),

        getGroupPost:builder.query({
            query:(GroupPostID)=> `groupposts/single/${GroupPostID}`,
            providesTags: ['groupPosts']
        }),

        addGroupPost:builder.mutation({
            query:(groupPost)=>({
                url: 'groups',
                method:'POST',
                body: groupPost
            }),
            invalidatesTags:['groupPosts']
        }),

        updateGroupPost:builder.mutation({
            query:(groupPost)=>({
                url: `groupPosts/update/${groupPost.GroupPostID}`,
                method: 'PUT',
                body: groupPost
            }),
            invalidatesTags: ['groupPosts']
        }),

        deleteGroupPost: builder.mutation({
            query:(GroupID)=>({
                url: `groupPosts/delete/${GroupID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['groupPosts']
        })
    })
})

export const {useGetGroupPostsQuery,useGetGroupPostQuery,useAddGroupPostMutation,useUpdateGroupPostMutation,useDeleteGroupPostMutation}=groupPostApi