import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from "./pages/AboutScreen";
import LoginScreen from "./pages/LoginScreen";
import NewsErrorScreen from "./pages/NewsErrorScreen";
import NewsScreen from "./pages/NewsScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<NewsScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="*" element={<NewsErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
