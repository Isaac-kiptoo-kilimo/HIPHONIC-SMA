import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const friendApi=createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Users'],
    endpoints: (builder)=>({
        getFriends:builder.query({
            query:(userID1)=> `friendships/${userID1}`,
            providesTags: ['Users']
        }),
        addFriendship:builder.mutation({
            query:(friendship)=>({
                url: 'friendships',
                method:'POST',
                body: friendship
            }),
            invalidatesTags:['Users']
        }),
        }),
        updateFriendship:builder.mutation({
            query:(friendship)=>({
                url: `friendships/${friendship.FriendshipID}`,
                method: 'PUT',
                body: friendship
            }),
            invalidatesTags: ['Users']
        }),
    
        deleteFriendship: builder.mutation({
            query:(userID)=>({
                url: `friendships/${FriendshipID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        })

    })


export const {useGetFriendsQuery,useAddFriendshipMutation,useUpdateFriendshipMutation,useDeleteFriendshipMutation}=friendApi