import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiURL from './api'


const itinerariesAPI = createApi({
    reducerPath: "itinerariesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    endpoints: (builder) => ({
        newItinerary: builder.mutation({
            query: (data) => ({
                url: `/itineraries/`,
                method: "POST",
                body: data
            })
        }),
        getAllItineraries: builder.query({
            query : (id) => `/itineraries/?itinerary=${id}`
        }),
        getCityItineraries: builder.query({
            query: (id) =>(`/itineraries/?city=${id}`),
            
        }),
        getUserItineraries: builder.query({
            query: (id) => `/itineraries/?auth=${id}`
            }),
        editItinerary: builder.mutation({
            query: ({id, data}) => ({
                url: `/cities/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        deleteItinerary: builder.mutation({
            query: (id) => ({
                url: `/itineraries/${id}`,
                method:'DELETE',
                })
        })
    })
})

export default itinerariesAPI
export const {useGetAllItinerariesQuery, 
    UseGetCityItinerariesQuery, useGetUserItinerariesQuery,
UseEditItineraryMutation, UseDeleteItineraryMutation, UsenewItineraryMutation
} = itinerariesAPI