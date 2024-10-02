import { combineReducers, createStore, applyMiddleware } from "redux";

import cartReducer from "./reducers/cartReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";

// reducerları birleştir

const rootReducer = combineReducers({
  product: productReducer,
  restaurant: restaurantReducer,
  cart: cartReducer,
});

//store'u oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
