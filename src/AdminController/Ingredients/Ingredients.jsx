import React from "react";
import IngredientTable from "./IngredientsTable";
import { Grid } from "@mui/material";
import IngredientsCategoryTable from "./IngredientsCategoryTable";

const Ingredients = () => {
  return (
    <div className="px-1">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <IngredientTable />
        </Grid>
        <Grid item xs={12} lg={4}>
          <IngredientsCategoryTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Ingredients;
