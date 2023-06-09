import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";
const read_cart = createAsyncThunk('read_cart', async()=>{
  try {
      
      let userId = "6480bafa03131bde973ed4d7"
      let res = await axios(apiUrl +`cart/${userId}`)
      console.log(res.data)
      return {
        cartItem:res.data
      }
    } catch (error) {
        return{
            cartItem:[]
        }
    }

})


const actions = { read_cart };

export default actions;