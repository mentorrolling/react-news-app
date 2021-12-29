
//Importar la herramienta para crear la Api y la funcion que hace la peticion
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const pokemonApi=createApi({
    reducerPath:'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://pokeapi.co/api/v2/'}),
    endpoints:(builder)=>({
        getPokemonByName: builder.query({
            query:(name)=>`pokemon/${name}`
        }),
        // getPokemon:builder.query({
        //     query:()=>`pokemon`
        // })
//https://sitenso.co/api/usuarios
//query:()=>`usuarios`
    })

})

export const {useGetPokemonByNameQuery} = pokemonApi
