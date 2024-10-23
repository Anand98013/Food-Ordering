import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateRestaurantForm from "../AdminController/CreateRestaurantForm/CreateRestaurantForm";
import Admin from "../AdminController/Admin/Admin";
import { useSelector } from "react-redux";

export const AdminRoute = () => {
  const { restaurant } = useSelector((store) => store);
  console.log("usersRestaurant:", restaurant.usersRestaurant);
  

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            !restaurant.usersRestaurant ? <CreateRestaurantForm /> : <Admin />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AdminRoute;
