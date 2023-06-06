import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/products";
const {products_read}=actions 
let inicialState={
    products:[]
}

const reducer =createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
       products_read.fulfilled,
       (state,action)=>{
        let newState={
               ...state,
               products:action.payload.products
            }
         
        return newState
       }
    )
    )
    export default reducer
