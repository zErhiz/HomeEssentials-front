import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const  orders_read  = createAsyncThunk(' orders_read ', async () => {
    try {
        let res = await axios(apiUrl+'order')
        return {orders:res.data.orders}
     
        
    } catch (error) {
        console.log(error)
        return {
            orders:[]
        }}})

const actions= { orders_read }
export default  actions