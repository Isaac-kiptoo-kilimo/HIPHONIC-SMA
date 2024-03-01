import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventAtendeeApi = createApi({
    reducerPath: 'eventAtendeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes: ['EventAtendee'],
    endpoints: (builder) => ({
        createEventAtendee: builder.mutation({
            query: (eventAtendee) => ({
                url: `eventAtendee`, 
                method: 'POST',
                body: eventAtendee
            }),
            invalidatesTags: ['EventAtendee']
        }),
        getEventAttendees: builder.query({
            query: (EventID) => `eventAtendee/${EventID}`, 
            providesTags: (result, error,EventID) => [
                { type: 'EventAtendee', id: EventID }
            ]
        }),
        deleteEventAttendee: builder.mutation({
            query: ({EventID, attendeeId }) => ({
                url: `eventAtendee/${EventID}/${attendeeId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['EventAtendee']
        })
    })
});

export const { useCreateEventAtendeeMutation, useGetEventAttendeesQuery, useDeleteEventAttendeeMutation } = eventAtendeeApi;
