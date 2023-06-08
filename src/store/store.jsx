import { configureStore } from "@reduxjs/toolkit";
import category_reducer from './reducers/categories_reducer'

import cardsHomeReducer from './reducers/cardsHome_reducer'
import manufacturersReducer from "./reducers/manufacturers_reducer"
import productOne_reducer from './reducers/productOne_reducer'

import products_reducer from './reducers/products_reducer'





const store = configureStore({
  
    reducer:{
        categories:category_reducer,

        cardsHome:cardsHomeReducer,
        manufacturerHome: manufacturersReducer,


        products:products_reducer,
        oneProduct:productOne_reducer



    }
})

export default store 