import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Video'],
    endpoints: (builder) => ({

        //Create a new video item
        addVideo: builder.mutation({
            query:(video) => ({
                url: 'video',
                method: 'POST',
                body: video
            }),
            invalidatesTags:['Video']
        }),
    })
})

export const { useAddVideoMutation } = videoApi;