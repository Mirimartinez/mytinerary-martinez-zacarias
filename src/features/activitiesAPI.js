import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiURL from '../api'


const ActivitiesAPI = createApi({
    reducerPath: "activitiesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    endpoints: (builder) => ({
        
        getAllActivities: builder.query({
            query : (itineraryId) => `/activities/?activity=${itineraryId}`
        }),
    })
})

export default ActivitiesAPI
export const {useGetAllActivitiesQuery} = ActivitiesAPI