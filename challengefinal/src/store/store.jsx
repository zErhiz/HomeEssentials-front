import { configureStore } from "@reduxjs/toolkit";
import category_reducer from './reducers/categories_reducer'
import products_reducer from './reducers/products_reducer'



const store = configureStore({
  
    reducer:{
        categories:category_reducer,
        products:products_reducer
    }
})

export default store 