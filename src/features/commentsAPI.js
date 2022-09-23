import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
        }),
        endpoints: (builder)=>({
            createComment: builder.mutation({
                query: (comment) =>({
                url: `/comments`,
                method:'POST',
                body: comment
                    })
                }),
            getComment: builder.query({
                query: (id) => `/comments/${id}`
                }),

            getItinerariesComment: builder.mutation({
                query: (id) => ({
                    url: `/comments/?itinerary=${id}`,
                    mothod: "GET",
                }),
                transformResponse: (res) => res.response
                    }),
                    
            modifyComment: builder.mutation({
                query: ({id,data}) =>({
                url: `/comments/${id}`,
                method:'PUT',
                body: data
                }),
                transformResponse: res => res.response
                }),
            deleteComment: builder.mutation({
                query: (id) =>({
                    url: `/comments/${id}`,
                    method:'DELETE'
                    })
                })
        })
    })

export const {useCreateCommentMutation, useDeleteCommentMutation, useModifyCommentMutation,useGetItinerariesCommentMutation} = commentsAPI