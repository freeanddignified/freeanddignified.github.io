import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BackOffice from "./pages/backOffice/BackOffice";
import BackOfficeMain from "./pages/backOffice/BackOfficeMain";
import BackOfficeShop from "./pages/backOffice/BackOfficeShop";
import BackOfficeDevelopment from "./pages/backOffice/BackOfficeDevelopment";
import BackOfficeNeeds from "./pages/backOffice/BackOfficeNeeds";
import BackOfficeOpportunities from "./pages/backOffice/BackOfficeOpportunities";
import BackOfficeDocuments from "./pages/backOffice/BackOfficeDocuments";
// Need to put multiple files under index.js

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<BackOffice />}>
        <Route path="main" element={<BackOfficeMain />} />
        <Route path="shop" element={<BackOfficeShop />} />
        <Route path="development" element={<BackOfficeDevelopment />} />
        <Route path="needs" element={<BackOfficeNeeds />} />
        <Route path="opportunities" element={<BackOfficeOpportunities />} />
        <Route path="documents" element={<BackOfficeDocuments />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
