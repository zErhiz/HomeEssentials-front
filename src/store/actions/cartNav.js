
import { createAction } from "@reduxjs/toolkit";

const cartNav = createAction(
    'cartNav', 
    (cart) => {    
                    
      return {
        payload: {
          cart:cart
        }
      }
    } 
  )
  
  
  const actions = {cartNav}
  
  export default actions

