import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupApi=createApi({
    reducerPath: "groupApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['groups'],
    endpoints: (builder)=>({

        getGroups:builder.query({
            query:()=> 'groups',
            providesTags: ['groups']
        }),

        getGroup:builder.query({
            query:(GroupID)=> `groups/single/${GroupID}`,
            providesTags: ['groups']
        }),

        addGroup:builder.mutation({
            query:(group)=>({
                url: 'groups',
                method:'POST',
                body: group
            }),
            invalidatesTags:['groups']
        }),

        updateGroup:builder.mutation({
            query:(group)=>({
                url: `groups/update/${group.GroupID}`,
                method: 'PUT',
                body: group
            }),
            invalidatesTags: ['groups']
        }),

        deleteGroup: builder.mutation({
            query:(GroupID)=>({
                url: `groups/delete/${GroupID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['groups']
        })
    })
})

export const {useGetGroupsQuery,useGetGroupQuery,useAddGroupMutation,useUpdateGroupMutation,useDeleteGroupMutation}=groupApi