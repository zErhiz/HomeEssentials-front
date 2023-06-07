import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/manufacturers";
const {manufacturers_read}=actions 
let inicialState={
    manufacturers:[]
}
const reducer =createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
        manufacturers_read.fulfilled,
       (state,action)=>{
        let newState={
               ...state,
               manufacturers:action.payload.manufacturers
            }
         
        return newState
       }
    )
    )
    export default reducer
