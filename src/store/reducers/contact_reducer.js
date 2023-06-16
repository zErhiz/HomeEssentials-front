import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/contactRead";
const {contact_read}=actions 
let inicialState={
    contact:[]
}
const reducer =createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
        contact_read.fulfilled,
       (state,action)=>{
        let newState={
               ...state,
               contact:action.payload.contact
            }
         
        return newState
       }
    )
    )
    export default reducer