import { configureStore } from "@reduxjs/toolkit";
import category_reducer from './reducers/categories_reducer';
import cardsHomeReducer from './reducers/cardsHome_reducer';
import manufacturersReducer from "./reducers/manufacturers_reducer";
import productOne_reducer from './reducers/productOne_reducer';
import products_reducer from './reducers/products_reducer';
import carritoReducer from "./reducers/carrito_reducer";
import userLogin_reducer from "./reducers/userLogin_reducer";
import usersAdmin_reducer from "./reducers/usersAdmin_reducer"
import productsAdmin_reducer from "./reducers/products_admin_reducer"
const store = configureStore({
  reducer: {
    categories: category_reducer,
    cardsHome: cardsHomeReducer,
    manufacturerHome: manufacturersReducer,
    products: products_reducer,
    oneProduct: productOne_reducer,
    carrito:carritoReducer,
    userLogin: userLogin_reducer,
    userget: usersAdmin_reducer,
    productsAdmin: productsAdmin_reducer,
  },
});

export default store;