import {
  GET_RESTAURANTS_ORDER_FAILURE,
  GET_RESTAURANTS_ORDER_REQUEST,
  GET_RESTAURANTS_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "./ActionTypes";

const initaialState = {
  loading: false,
  error: null,
  orders: [],
};

export const restaurantsOrderReducer = (state = initaialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_ORDER_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return { ...state, error: null, loading: true };

    case GET_RESTAURANTS_ORDER_SUCCESS:
      return { ...state, loading: false, orders: action.payload };

    case UPDATE_ORDER_STATUS_SUCCESS:
      const updatedOrders = state.orders.map((order) =>
        order.id === action.payload.id ? action.payload : order
      );
      return { ...state, orders: updatedOrders, loading: false };

    case GET_RESTAURANTS_ORDER_FAILURE:
    case UPDATE_ORDER_STATUS_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

export default restaurantsOrderReducer;
