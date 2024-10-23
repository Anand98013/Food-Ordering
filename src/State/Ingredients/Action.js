import { api } from "../../Config/Api";
import {
  CREATE_INGREDIENTS_CATEGORY_SUCCESS,
  GET_INGREDIENTS,
  GET_INGREDIENTS_CATEGORY_SUCCESS,
  UPDATE_STOCK,
} from "./ActionsTypes";

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `/api/admin/ingredients/restaurant/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );      

      console.log("get all ingredients", response.data);

      dispatch({ type: GET_INGREDIENTS, payload: response.data });
    } catch (error) {
      console.log("Catch error", error);
    }
  };
};

export const createIngredients = ({ data, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.post(`/api/admin/ingredients`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create ingredients", response.data);

      dispatch({
        type: CREATE_INGREDIENTS_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("Catch error", error);
    }
  };
};

export const createIngredientsCategory = ({ data, jwt }) => {
  console.log("data", data, "jwt", jwt);
  return async (dispatch) => {
    try {
      const response = await api.post(`/api/admin/ingredients/category`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: CREATE_INGREDIENTS_CATEGORY_SUCCESS,
        payload: response.data,
      });
      console.log("create ingredients category", response.data);
    } catch (error) {
      console.log("Catch error", error);
    }
  };
};

export const getIngredientsCategory = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `/api/admin/ingredients/restaurant/${id}/category`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_INGREDIENTS_CATEGORY_SUCCESS,
        payload: response.data,
      });
      console.log("get ingredients category", response.data);
    } catch (error) {
      console.log("Catch error", error);
    }
  };
};

export const updateStockOfIngredient = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const { data } = await api.put(
        `/api/admin/ingredients/${id}/stoke`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_STOCK,
        payload: data,
      });
      console.log("update ingredients stock", data);
    } catch (error) {
      console.log("Catch error", error);
    }
  };
};
