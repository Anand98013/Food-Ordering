import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoryAction } from "../../State/Restaurant/Action";

const CreateFoodCategoryForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: 1,
      },
    };
    dispatch(
      createCategoryAction({ regData: data, jwt: localStorage.getItem("jwt") })
    );
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text=gray-400 text-center text-xl pb-10">
          Create Food Category
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="categoryName"
            name="categoryName"
            label="Food Category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.categoryName}
          />
          <Button variant="contained" type="submit">
            Create Food Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateFoodCategoryForm;
