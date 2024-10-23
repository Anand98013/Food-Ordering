import * as actionType from "./ActionTypes";
import { LOGOUT } from "../Authentication/ActionTypes";

const initialState = {
  cart: { total: 0, items: [] },
  cartItems: [],
  isLoading: false,
  error: null,
};


export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FIND_CART_REQUEST:
    case actionType.GET_ALL_CART_ITEMS_REQUEST:
    case actionType.UPDATE_CART_ITEM_REQUEST:
    case actionType.REMOVE_CARTITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case actionType.FIND_CART_SUCCESS:
    case actionType.CLEARE_CART_SUCCESS:
      const items = action.payload.items;
      const total = items.reduce((acc, item) => acc + item.totalPrice, 0);
      return {
        ...state,
        isLoading: false,
        cart: { ...action.payload, total },
        cartItems: items,
      };

    case actionType.ADD_ITEM_TO_CART_SUCCESS:
      const addedItem = action.payload;
      const newItems = [addedItem, ...state.cartItems];
      const newTotal = newItems.reduce((acc, item) => acc + item.totalPrice, 0);
      return {
        ...state,
        isLoading: false,
        cartItems: newItems,
        cart: { ...state.cart, total: newTotal }
      };

    case actionType.UPDATE_CART_ITEM_SUCCESS:
      const updatedItem = action.payload;
      const updatedItems = state.cartItems.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      );
      const updatedTotal = updatedItems.reduce((acc, item) => acc + item.totalPrice, 0);
      return {
        ...state,
        isLoading: false,
        cartItems: updatedItems,
        cart: { ...state.cart, total: updatedTotal }
      };

    case actionType.REMOVE_CARTITEM_SUCCESS:
      const filteredItems = state.cartItems.filter(item => item.id !== action.payload);
      const filteredTotal = filteredItems.reduce((acc, item) => acc + item.totalPrice, 0);
      return {
        ...state,
        isLoading: false,
        cartItems: filteredItems,
        cart: { ...state.cart, total: filteredTotal }
      };

    case actionType.FIND_CART_FAILURE:
    case actionType.UPDATE_CART_ITEM_FAILURE:
    case actionType.REMOVE_CARTITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case LOGOUT:
      localStorage.removeItem("jwt");
      return { ...state, cartItems: [], cart: { total: 0, items: [] }, success: "logout success" };

    default:
      return state;
  }
};
