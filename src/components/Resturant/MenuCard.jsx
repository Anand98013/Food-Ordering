import React, { useState, useCallback } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CategorizeIngredients } from "../Util/CategreizeIngredients";
import { useDispatch } from "react-redux";
import { addItemTOCart } from "../../State/Cart/Action";

const MenuCard = React.memo(({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleCheckBoxChange = useCallback(
    (ingredientName) => {
      setSelectedIngredients((prevSelectedIngredients) => {
        const updatedIngredients = prevSelectedIngredients.includes(
          ingredientName
        )
          ? prevSelectedIngredients.filter(
              (ingredient) => ingredient !== ingredientName
            )
          : [...prevSelectedIngredients, ingredientName];

        setTimeout(() => {
          const reqData = {
            token: localStorage.getItem("jwt"),
            cartItem: {
              foodId: item.id,
              quantity: 1,
              ingredients: updatedIngredients,
            },
          };

          console.log("Updated Ingredients:", updatedIngredients);
          console.log("reqData:", reqData);
          dispatch(addItemTOCart(reqData));
        }, 100); // Small delay to allow state to update

        return updatedIngredients; // return the updated state
      });
    },
    [dispatch, item.id]
  );

  const handleAddItemToCart = useCallback(
    (e) => {
      e.preventDefault();
      const reqData = {
        token: localStorage.getItem("jwt"),
        cartItem: {
          foodId: item.id,
          quantity: 1,
          ingredients: selectedIngredients,
        },
      };
      console.log("reqData before dispatch:", reqData);      
      dispatch(addItemTOCart(reqData));
    },
    [selectedIngredients, dispatch, item.id]
  );

  const categorizedIngredients = CategorizeIngredients(item.ingredients);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src={item.images[0]}
              alt={item.name}
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">{item.name}</p>
              <p>₹{item.price}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleAddItemToCart}>
          <div className="flex gap-5 flex-wrap">
            {Object.keys(categorizedIngredients).map((category) => (
              <div key={category}>
                <p>{category}</p>
                <FormGroup>
                  {categorizedIngredients[category].map((ingredient) => (
                    <FormControlLabel
                      key={ingredient.name}
                      control={
                        <Checkbox
                          onChange={() => handleCheckBoxChange(ingredient.name)}
                        />
                      }
                      label={ingredient.name}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>

          <div className="pt-5">
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
});

export default MenuCard;
