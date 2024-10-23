import {
//   GET_USER_NOTIFICATION_SUCCESS,
  GET_USERS_ORDERS_FAILURE,
  GET_USERS_ORDERS_REQUEST,
  GET_USERS_ORDERS_SUCCESS,
} from "./ActionTypes";

const initaialState = {
  loading: false,
  error: null,
  orders: [],
  notifications: [],
};

export const orderReducer = (state = initaialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_ORDERS_REQUEST:
      return { ...state, error: null, loading: true };

    case GET_USERS_ORDERS_SUCCESS:
      return { ...state, error: null, loading: false, orders: payload };

    // case GET_USER_NOTIFICATION_SUCCESS:
    //     return {...state, notifications:payload, error: null, loading: false}

    case GET_USERS_ORDERS_FAILURE:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
