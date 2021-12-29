
import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

let apikey = "452d00247570407f893864ae69119af9";
let pais = "ar";
let cantidad = 10;

export const noticiasApi=createApi({
    reducerPath:'noticiasApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://newsapi.org/v2/'}),
    endpoints:(builder)=>({
        getNotiasByCategory:builder.query({
            query:(category)=>`top-headlines?country=${pais}&apiKey=${apikey}&pageSize=${cantidad}&category=${category}`
        })
    })


})

export const {useGetNoticiasByCategoryQuery}=noticiasApi