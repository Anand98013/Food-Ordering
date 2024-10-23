import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer"; 
import { thunk } from "redux-thunk";
import {restaurantReducer} from "./Restaurant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import {cartReducer} from "./Cart/Reducer";
import { orderReducer } from "./Orders/Reducer";
import ingredientReducer from "./Ingredients/Reducer";
import restaurantsReducer from "./Restaurant Orders/Reducer";

const rootReducer = combineReducers({
    auth: authReducer, 
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantsReducer,
    ingredients: ingredientReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
