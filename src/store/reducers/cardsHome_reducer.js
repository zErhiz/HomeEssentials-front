import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/cardsHome";
const {cards_home_read}=actions 
let inicialState={
    productsHome:[]
}
const reducer =createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
        cards_home_read.fulfilled,
       (state,action)=>{
        let newState={
               ...state,
               productsHome:action.payload.productsHome
            }
         
        return newState
       }
    )
    )
    export default reducer
