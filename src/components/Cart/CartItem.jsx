import { Chip, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateCartItem } from "../../State/Cart/Action";

const CartItem = ({ item }) => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  if (!item) {
    return null;
  }

  // Ensure item.food and its properties are not null
  const itemName = item.food?.name || "Food Item";
  const itemImage = item.food?.images?.[0];
  const itemQuantity = item.quantity || 0;
  const itemTotalPrice = item.totalPrice || 0;

  const handleUpdateCartItem = (value) => {
    if (itemQuantity + value === 0) {
      handleRemoveCartItem();
    } else {
      const data = { cartItemId: item.id, quantity: itemQuantity + value };
      dispatch(updateCartItem({ data, jwt }));
    }
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }));
  };

  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={itemImage}
            alt={itemName}
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-2 w-full">
            <p>{itemName}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {itemQuantity}
                </div>
                <IconButton onClick={() => handleUpdateCartItem(1)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>₹{itemTotalPrice}</p>
        </div>
      </div>
      <div className="pt-3 space-x-3">
        {item.ingredients && item.ingredients.length > 0 ? (
          item.ingredients.map((ingredient, index) => (
            <Chip key={index} label={ingredient} />
          ))
        ) : (
          <p>No ingredients listed</p>
        )}
      </div>
    </div>
  );
};

export default CartItem;
