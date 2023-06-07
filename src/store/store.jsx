import { configureStore } from "@reduxjs/toolkit";
import category_reducer from './reducers/categories_reducer'
import cardsHomeReducer from './reducers/cardsHome_reducer'
import manufacturersReducer from "./reducers/manufacturers_reducer"


const store = configureStore({
  
    reducer:{
        categories:category_reducer,
        cardsHome:cardsHomeReducer,
        manufacturerHome: manufacturersReducer,
    }
})

export default store 