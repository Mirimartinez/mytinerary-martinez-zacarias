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
            query: (newCity) => ({
                url: '/cities/',
                method: "POST",
                body: newCity,
                headers: {"Authorization": "Bearer " + localStorage.getItem('token')}
            })
        }),

        editCity: builder.mutation({
            query: ({editCity:city, id}) => {
                return ({
                url: `/cities/${id}`,
                method: "PATCH",
                body: city,
                headers: {"Authorization": "Bearer " + localStorage.getItem('token')}
            })}
            
        }),

        deleteCity: builder.mutation({
            query: (id) => ({
                url: `/cities/${id}`,
                method: "DELETE",
                headers: {"Authorization": "Bearer " + localStorage.getItem('token')}
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

