import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/orders";
const {orders_read}=actions 
let inicialState={
    orders:[]
}
const reducer =createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
        orders_read.fulfilled,
       (state,action)=>{
        let newState={
               ...state,
               orders:action.payload.orders
            }
         
        return newState
       }
    )
    )
    export default reducer