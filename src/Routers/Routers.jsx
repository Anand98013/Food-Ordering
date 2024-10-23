import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import CustomersRouter from "./CustomerRouter";

const Routers = () => {
  return (
    <Routes>
      <Route path='/admin/restaurants/*' element={<AdminRoute />} />
      <Route path='/*' element={<CustomersRouter />} />
    </Routes>
  );
};

export default Routers;
