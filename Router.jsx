import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Component/Home";
import Register from "../Component/Register";
import Login from "../Component/Login";
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
