import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiURL from '../../api'


const ActivitiesAPI = createApi({
    reducerPath: "activitiesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    endpoints: (builder) => ({
        
        getAllActivities: builder.query({
            query : (search) => `/activities/?activity=${search}`
        }),
        getActivity: builder.query({
            query: (id) => `/activities/${id}`
        }),
        getItineraryActivities: builder.query({
            query: (id) =>(`/activities/?itinerary=${id}`),
            
        }),
        getUserActivities: builder.query({
            query: (id) => `/activities/?auth=${id}`
            }),
        editActivity: builder.mutation({
            query: ({id, data}) => ({
                url: `/activities/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        deleteActivity: builder.mutation({
            query: (id) => ({
                url: `/activities/${id}`,
                method:'DELETE',
                })
        })
    })
})

export default ActivitiesAPI
export const {useGetActivityQuery, useGetAllActivitiesQuery, 
    UseGetItineraryActivitiesQuery, useGetUserActivitiesQuery,
UseEditActivityMutation, UseDeleteActivityMutation
} = ActivitiesAPI