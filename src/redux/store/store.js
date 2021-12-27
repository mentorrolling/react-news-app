import { configureStore } from "@reduxjs/toolkit";
//Traer api de rtk query
import {pokemonApi} from '../../services/pokemon'
//import {productoApi} from '../../'
import usuarioReducer from "../slices/usuarioSlice";


const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]:pokemonApi.reducer,
    // [productoApi.reducerPath]:productoApi.reducer
    usuario: usuarioReducer,
  },

  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(pokemonApi.middleware)

});

//alumnos[].concat(alumnas,alumnitos)
//alumnas[]
//alumnitos[]

export default store