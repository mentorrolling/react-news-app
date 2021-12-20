import { configureStore } from "@reduxjs/toolkit";

import usuarioReducer from "../slices/usuarioSlice";

export default configureStore({
  reducer: {
    usuario: usuarioReducer,
  },
});
