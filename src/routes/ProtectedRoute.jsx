import React from "react";
import { Navigate } from "react-router-dom";
import NewsNavbar from "../components/NewsNavbar";

const ProtectedRoute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("auth")) || null;

  return (
    <>
      <NewsNavbar />
      {isAuth?.googleId ? children : <Navigate to="/login" />}
    </>
  );
};

export default ProtectedRoute;
