import { createReducer } from "@reduxjs/toolkit";

import cartNav_action from '../actions/cartNav.js'


const {cartNav} = cartNav_action

let initial_state = {
  cart: 0
}

const reducer = createReducer (
  initial_state,
  (builder) => builder
  .addCase(
    cartNav,
    (state, action) => {
      const new_state = {
        ...state, 
         cart:action.payload.cart
      }
      return new_state
    }
  )
)

export default reducer