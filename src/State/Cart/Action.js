import { api } from "../../Config/Api";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  CLEARE_CART_FAILURE,
  CLEARE_CART_REQUEST,
  CLEARE_CART_SUCCESS,
  FIND_CART_FAILURE,
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  GET_ALL_CART_ITEMS_FAILURE,
  GET_ALL_CART_ITEMS_REQUEST,
  GET_ALL_CART_ITEMS_SUCCESS,
  REMOVE_CARTITEM_FAILURE,
  REMOVE_CARTITEM_REQUEST,
  REMOVE_CARTITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionTypes";

export const findCart = (token) => {
  return async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    try {
      const response = await api.get(`/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
      console.log("my cart:", response.data);
    } catch (error) {
      dispatch({ type: FIND_CART_FAILURE, payload: error });
      console.log("Error my cart:", error);
    }
  };
};

export const getAllCartItem = (regData) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
    try {
      const response = await api.get(`api/carts/${regData.cartId}/items`, {
        headers: {
          Authorization: `Bearer ${regData.token}`,
        },
      });
      dispatch({
        type: GET_ALL_CART_ITEMS_SUCCESS,
        payload: response.data,
      });
      console.log("All cart item get", response.data);
    } catch (error) {
      dispatch({
        type: GET_ALL_CART_ITEMS_FAILURE,
        payload: error,
      });
      console.log("error", error);
    }
  };
};

export const addItemTOCart = (regData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
      const { data } = await api.put(`/api/cart/add`, regData.cartItem, {
        headers: {
          Authorization: `Bearer ${regData.token}`,
        },
      });
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
      console.log("add item to cart", data);
    } catch (error) {
      dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
      console.log("error", error);
    }
  };
};

export const updateCartItem = (regData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    try {
      const { data } = await api.put(`/api/cart-item/update`, regData.data, {
        headers: {
          Authorization: `Bearer ${regData.jwt}`,
        },
      });
      dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
      console.log("Update Cart item", data);
    } catch (error) {
      dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error });
      console.log("error", error);
    }
  };
};

export const removeCartItem = ({ cartItemId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CARTITEM_REQUEST });
    try {
      const { data } = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("remove cart item", data);
      dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
    } catch (error) {
      dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error });
      console.log("error", error);
    }
  };
};

export const clearCartAction = () => {
  return async (dispatch) => {
    dispatch({ type: CLEARE_CART_REQUEST });
    try {
      const { data } = await api.put(
        `/api/cart/clear`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      console.log("cart clear", data);
      dispatch({ type: CLEARE_CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CLEARE_CART_FAILURE, payload: error });
      console.log("error", error);
    }
  };
};

// import { api } from "../../Config/Api";
// import {
//   ADD_ITEM_TO_CART_FAILURE,
//   ADD_ITEM_TO_CART_REQUEST,
//   ADD_ITEM_TO_CART_SUCCESS,
//   CLEARE_CART_FAILURE,
//   CLEARE_CART_REQUEST,
//   CLEARE_CART_SUCCESS,
//   FIND_CART_FAILURE,
//   FIND_CART_REQUEST,
//   FIND_CART_SUCCESS,
//   GET_ALL_CART_ITEMS_FAILURE,
//   GET_ALL_CART_ITEMS_REQUEST,
//   GET_ALL_CART_ITEMS_SUCCESS,
//   REMOVE_CARTITEM_FAILURE,
//   REMOVE_CARTITEM_REQUEST,
//   REMOVE_CARTITEM_SUCCESS,
//   UPDATE_CART_ITEM_FAILURE,
//   UPDATE_CART_ITEM_REQUEST,
//   UPDATE_CART_ITEM_SUCCESS,
// } from "./ActionTypes";

// export const findCart = (token) => {
//   return async (dispatch) => {
//     dispatch({ type: FIND_CART_REQUEST });
//     try {
//       const response = await api.get(`/api/cart`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
//       console.log("My cart:", response.data);
//     } catch (error) {
//       const errorMessage = error.response ? error.response.data.message : error.message;
//       dispatch({ type: FIND_CART_FAILURE, payload: errorMessage });
//       console.log("Error my cart:", errorMessage);
//     }
//   };
// };

// export const getAllCartItem = (regData) => {
//   return async (dispatch) => {
//     dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
//     try {
//       const response = await api.get(`/api/carts/${regData.cartId}/items`, {
//         headers: {
//           Authorization: `Bearer ${regData.token}`,
//         },
//       });
//       dispatch({
//         type: GET_ALL_CART_ITEMS_SUCCESS,
//         payload: response.data,
//       });
//       console.log("All cart items fetched:", response.data);
//     } catch (error) {
//       const errorMessage = error.response ? error.response.data.message : error.message;
//       dispatch({
//         type: GET_ALL_CART_ITEMS_FAILURE,
//         payload: errorMessage,
//       });
//       console.log("Error fetching cart items:", errorMessage);
//     }
//   };
// };

// export const addItemTOCart = (regData) => {
//   return async (dispatch) => {
//     dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
//     try {
//       const { data } = await api.put(`/api/cart/add`, regData.cartItem, {
//         headers: {
//           Authorization: `Bearer ${regData.token}`,
//         },
//       });
//       dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
//       console.log("Added item to cart:", data);
//     } catch (error) {
//       const errorMessage = error.response ? error.response.data.message : error.message;
//       dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: errorMessage });
//       console.log("Error adding item to cart:", errorMessage);
//     }
//   };
// };

// export const updateCartItem = (regData) => {
//   return async (dispatch) => {
//     dispatch({ type: UPDATE_CART_ITEM_REQUEST });
//     try {
//       const { data } = await api.put(`/api/cart-item/update`, regData.data, {
//         headers: {
//           Authorization: `Bearer ${regData.jwt}`,
//         },
//       });
//       dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
//       console.log("Update Cart item", data);
//     } catch (error) {
//       dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error });
//       console.log("error", error);
//     }
//   };
// };

// export const removeCartItem = ({ cartItemId, token }) => {
//   return async (dispatch) => {
//     dispatch({ type: REMOVE_CARTITEM_REQUEST });
//     try {
//       const { data } = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log("Removed cart item:", data);
//       dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
//     } catch (error) {
//       const errorMessage = error.response ? error.response.data.message : error.message;
//       dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: errorMessage });
//       console.log("Error removing cart item:", errorMessage);
//     }
//   };
// };

// export const clearCartAction = (token) => {
//   return async (dispatch) => {
//     dispatch({ type: CLEARE_CART_REQUEST });
//     try {
//       const { data } = await api.put(`/api/cart/clear`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log("Cart cleared:", data);
//       dispatch({ type: CLEARE_CART_SUCCESS, payload: data });
//     } catch (error) {
//       const errorMessage = error.response ? error.response.data.message : error.message;
//       dispatch({ type: CLEARE_CART_FAILURE, payload: errorMessage });
//       console.log("Error clearing cart:", errorMessage);
//     }
//   };
// };
