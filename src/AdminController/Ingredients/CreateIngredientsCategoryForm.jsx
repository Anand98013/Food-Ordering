import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIngredientsCategory } from "../../State/Ingredients/Action";

const CreateIngredientsCategoryForm = () => {
  const { restaurant } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      restaurantId: restaurant.usersRestaurant.id,
    };
    console.log(formData);
    dispatch(createIngredientsCategory({ data, jwt }));
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
          Create Ingredient
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          />
          <Button variant="contained" type="submit">
            Create Ingredient Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientsCategoryForm;
