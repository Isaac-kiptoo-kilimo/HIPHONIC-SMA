import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes: ['Event'],
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => 'event', // Assuming 'event' is the endpoint for fetching events
            providesTags: ['Event']
        }),
        addEvent: builder.mutation({
            query: (event) => ({
                url: 'events', // Assuming 'events' is the endpoint for adding events
                method: 'POST',
                body: event
            }),
            invalidatesTags: ['Event']
        }),
        updateEvent: builder.mutation({
            query: ({ id, event }) => ({
                url: `event/${id}`, // Assuming 'event/:id' is the endpoint for updating events
                method: 'PUT',
                body: event
            }),
            invalidatesTags: ['Event'],
        }),
        deleteEvent: builder.mutation({
            query: (id) => ({
                url: `event/${id}`, // Assuming 'event/:id' is the endpoint for deleting events
                method: 'DELETE'
            }),
            invalidatesTags: ['Event'],
        })
    })
});

export const { useGetEventsQuery, useAddEventMutation, useDeleteEventMutation, useUpdateEventMutation } = eventApi;

