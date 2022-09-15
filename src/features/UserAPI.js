import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api'


const userAPI = createApi({

    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiURL,
    }),
    endpoints: (builder) => ({
        signUpUser: builder.mutation({
            query: (user) => ({
                url: '/auth/signup',
                method: 'POST',
                body: user,
            })
        }),

        signInUser: builder.mutation({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user
            })
        }),
    
        signOutUser: builder.mutation({
            query: (mail) => ({
                url: '/auth/signout',
                method: 'POST',
                body: mail
            })
        }),
    }),
})

export default userAPI
export const {useSignUpUserMutation, useSignInUserMutation, useSignOutUserMutation } = userAPI