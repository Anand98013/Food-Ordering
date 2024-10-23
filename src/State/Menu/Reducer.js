import * as actionType from "./ActionTypes";

const initaialState = {
  menuItems: [],
  loading: false,
  error: null,
  search: [],
  message: null,
};

const menuItemReducer = (state = initaialState, action) => {
  switch (action.type) {
    case actionType.CREATE_MENU_ITEM_REQUEST:
    case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
    case actionType.DELETE_MENU_ITEM_REQUEST:
    case actionType.SEARCH_MENU_ITEM_REQUEST:
    case actionType.UPDATE_MENU_ITEM_AVAILABILITY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        message: null,
      };

    case actionType.CREATE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menuItems: [...state.menuItems, action.payload],
        message: "Food Created Sucessfully",
      };

    case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menuItems: action.payload,
      };

    case actionType.DELETE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menuItems: state.menuItems.filter(
          (menuItem) => menuItem.id !== action.payload
        ),
      };

    case actionType.UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS:
      console.log("Updated item id", action.payload.id);
      return {
        ...state,
        isLoading: false,
        menuItems: state.menuItems.map((menuItem) =>
          menuItem.id === action.payload.id ? action.payload : menuItem
        ),
      };

    case actionType.SEARCH_MENU_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        search: action.payload,
      };

    case actionType.CREATE_MENU_ITEM_FAILURE:
    case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
    case actionType.DELETE_MENU_ITEM_FAILURE:
    case actionType.SEARCH_MENU_ITEM_FAILURE:
    case actionType.UPDATE_MENU_ITEM_AVAILABILITY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        message: null,
      };

    default:
      return state;
  }
};

export default menuItemReducer;
