import { createSlice } from "@reduxjs/toolkit";

//variable de estado
//valor inicial
//definir los reducers - funciones que se ejecutan segun las acciones
//exportar las acciones y los reducers

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    datos: {},
  },
  reducers: {
    addUsuario: (state, action) => {
      state.datos = action.payload;
    },
    clearUsuario: (state) => {
      state.datos = {};
    },
  },
});

export const { addUsuario, clearUsuario } = usuarioSlice.actions;
export default usuarioSlice.reducer;
