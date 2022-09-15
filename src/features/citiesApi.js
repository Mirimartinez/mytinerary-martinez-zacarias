import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiURL from '../api'

const citiesAPI = createApi({
    reducerPath : "citiesAPI",
    baseQuery : fetchBaseQuery({
        baseUrl : apiURL
    }),

    endpoints: (builder) => ({

        getAllCities: builder.query({
            query : (search) => `/cities/?city=${search}`
        }),

        postCity: builder.mutation({
            query: (data) => ({
                url: '/cities',
                method: "POST",
                body: data,
                responseHandler: (res) => res.body.response
            })
        }),

        editCity: builder.mutation({
            query: ({dataCity, id}) => ({
                url: `/cities/${id}`,
                method: "PATCH",
                body: dataCity,
                // responseHandler: (res) => res.body.response
            })
        }),

        getity: builder.query({
            query: (id) => `cities/${id}`
        }),

        getOneCity: builder.mutation({
            query: (id) => `cities/${id}`
        })
    })
})



export default citiesAPI
export const {
    useGetAllCitiesQuery, 
    usePostCityMutation, 
    useEditCityMutation, 
    useGetityQuery, 
    useGetOneCityMutation
} = citiesAPI

