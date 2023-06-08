import { createAction } from "@reduxjs/toolkit";


const productOne = createAction(
  'productOne', 
  (product) => {    
                  
    return {
      payload: {
        name: product.name,
        photo: product.photo,
        description:product.description,
      }
    }
  } 
)


const actions = {productOne}

export default actions