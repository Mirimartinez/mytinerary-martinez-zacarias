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
                body: data,
                headers: {"Authorization": "Bearer" + localStorage.getItem("token")}
            })
        }),
        getAllItineraries: builder.query({
            query : () => `/itineraries`
        }),
        getCityItineraries: builder.query({
            query: (id) =>(`/itineraries/?city=${id}`),
            transformResponse: res => res.response
        }),
        getUserItineraries: builder.query({
            query: (id) => ({
                url: `/itineraries/?user=${id}`,
                headers:{ "Authorization": "Bearer" + localStorage.getItem("token") }
            }),
                transformResponse: res => res.response
            }),
        
        editUserItinerary: builder.mutation({
            query: ({id, data}) => ({
                url: `/auth/?itinerary=${id}`,
                method: "PATCH",
                body: data,
                headers: {"Authorization": "Bearer" + localStorage.getItem("token")}
            })
        }),

        editCityTinerary: builder.mutation({
            query: ({id, data}) => ({
                url: `/itineraries/${id}`,
                method: "PATCH",
                body: data,
                headers: {"Authorization": "Bearer" + localStorage.getItem("token")}
            })
        }),
        deleteItinerary: builder.mutation({
            query: (id) => ({
                url: `/itineraries/${id}`,
                method:'DELETE',
                headers: {"Authorization": "Bearer" + localStorage.getItem("token")}
                })
        }),

        likeDislikeItineraries: builder.mutation({
            query: (id) =>({
                url: `/itineraries/likes/${id}`,
                method: 'PATCH',
                headers: {"Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))}
            })
        })
    })
})

export default itinerariesAPI

export const {useGetAllItinerariesQuery, 
    useGetCityItinerariesQuery, useGetUserItinerariesQuery, useEditUserItineraryMutation,
    useEditCityTineraryMutation, useDeleteItineraryMutation, useNewItineraryMutation, useLikeDislikeItinerariesMutation

} = itinerariesAPI