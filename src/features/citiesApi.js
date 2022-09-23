import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiURL from '../api'

const citiesAPI = createApi({
    reducerPath : "citiesAPI",
    baseQuery : fetchBaseQuery({
        baseUrl : apiURL
    }),

    endpoints: (builder) => ({

        getAllCities: builder.query({
            query : (id) => `/cities/?city=${id}`
        }),

        postCity: builder.mutation({
            query: (newCity) => ({
                url: '/cities/',
                method: "POST",
                body: newCity,
            })
        }),

        editCity: builder.mutation({
            query: ({city, id}) => ({
                url: `/cities/${id}`,
                method: "PATCH",
                body: city,                
            })
        }),

        deleteCity: builder.mutation({
            query: (id) => ({
                url: `/cities/${id}`,
                method: "DELETE"
            })
        }),

        getCity: builder.query({
            query: (id) => `cities/${id}`,
            transformResponse: res => res.response
        }),

        getOneCity: builder.mutation({
            query: (id) => `cities/${id}`,
            transformResponse: res => res.response
        })
    })
})



export default citiesAPI
export const {
    useGetAllCitiesQuery,
    usePostCityMutation,
    useEditCityMutation,
    useDeleteCityMutation,
    useGetCityQuery,
    useGetOneCityMutation
} = citiesAPI

