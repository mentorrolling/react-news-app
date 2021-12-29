import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsuario } from "./redux/slices/usuarioSlice";

// import AboutScreen from "./pages/AboutScreen";
import LoginScreen from "./pages/LoginScreen";
import NewsErrorScreen from "./pages/NewsErrorScreen";
import NewsScreen from "./pages/NewsScreen";
import PerfilScreen from "./pages/PerfilScreen";
import ProtectedRoute from "./routes/ProtectedRoute";
import NewsCategoryScreen from "./pages/NewsCategoryScreen";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("auth")) || {};
    dispatch(addUsuario(user));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <NewsScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <NewsCategoryScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <PerfilScreen />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NewsErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
