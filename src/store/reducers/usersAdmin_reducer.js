import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/usersAdmin";
const {usersAdmin}=actions 
let inicialState={
    users:[]
}

const reducer =createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
        usersAdmin.fulfilled,
       (state,action)=>{
        let newState={
               ...state,
               users:action.payload.users
            }
         
        return newState
       }
    )
    )
    export default reducer
