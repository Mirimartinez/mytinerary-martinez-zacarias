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
                method: "POST",
                body: user
            })
        }),
    
        signOutUser: builder.mutation({
            query: (user) => ({
                url: '/auth/signout',
                method: 'POST',
                body: user
            })
        }),

        verifyToken: builder.mutation({
            query: (token) => ({
                url: "/auth/token",
                headers: {"Authorization": "Bearer " + token}
            })
        }),

        editUser: builder.mutation({
            query: (data) => ({
                url: `/auth/`,
                method: "PATCH",
                body: data,
                headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
            })
        }),

        getUser: builder.query({
            query: (id) => `/auth/${id}`
        })
    })
})

export default userAPI
export const { useSignUpUserMutation, useSignInUserMutation, useSignOutUserMutation,useVerifyTokenMutation, useEditUserMutation, useGetUserQuery } = userAPI