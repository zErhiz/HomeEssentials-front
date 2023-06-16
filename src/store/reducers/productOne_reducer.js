import { createReducer } from "@reduxjs/toolkit";

import product_action from "../actions/productOne";


const {productOne} = product_action

let initial_state = {
  name: '',
  photo: '',
  description:'',
}

const reducer = createReducer (
  initial_state,
  (builder) => builder
  .addCase(
    productOne,
    (state, action) => {
      const new_state = {
        ...state, 
        name: action.payload.name,
        photo: action.payload.photo,
        description:action.payload.description
      }
      return new_state
    }
  )
)

export default reducer