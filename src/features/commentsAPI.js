import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../api";

const commentsAPI = createApi({
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
                    method: "GET",
                }),
                transformResponse: (res) => res.response
                    }),
                    
            modifyComment: builder.mutation({
                query: ({id,data}) => {
                    console.log(id, data);
                    return ({
                url: `/comments/${id}`,
                method:'PATCH',
                body: {data}
            // acá token
                })},
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

    export default commentsAPI
export const {useCreateCommentMutation, useDeleteCommentMutation, useModifyCommentMutation,useGetItinerariesCommentMutation} = commentsAPI