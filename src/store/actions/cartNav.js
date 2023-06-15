import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";
const cart_nav = createAsyncThunk('cart_nav', async()=>{
  try {
      
      let userId = "6480bafa03131bde973ed4d7"
      let res = await axios(apiUrl +`cart/${userId}`)
      console.log(res.data.length)
      return {
        cartItem:res.data
      }
    } catch (error) {
        return{
            cartItem:[]
        }
    }

})


const actions = { cart_nav };

export default actions;