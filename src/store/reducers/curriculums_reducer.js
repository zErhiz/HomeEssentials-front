import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/curriculums";
const {curriculums_read}=actions 
let inicialState={
    curriculums:[]
}
const reducer =createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
        curriculums_read.fulfilled,
       (state,action)=>{
        let newState={
               ...state,
               curriculums:action.payload.curriculums
            }
         
        return newState
       }
    )
    )
    export default reducer