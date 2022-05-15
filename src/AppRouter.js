import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  MerchCabinet,
  MerchCabinetMain,
  MerchCabinetShop,
  MerchCabinetDevelopment,
  MerchCabinetNeeds,
  MerchCabinetOpportunities,
  MerchCabinetDocuments,
} from "./pages/merchCabinet";

import Main from "./pages/Main";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="merchCabinet" element={<MerchCabinet />}>
          <Route index element={<MerchCabinetMain />} />
          <Route path="main" element={<MerchCabinetMain />} />
          <Route path="shop" element={<MerchCabinetShop />} />
          <Route path="development" element={<MerchCabinetDevelopment />} />
          <Route path="needs" element={<MerchCabinetNeeds />} />
          <Route path="opportunities" element={<MerchCabinetOpportunities />} />
          <Route path="documents" element={<MerchCabinetDocuments />} />
        </Route>
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
