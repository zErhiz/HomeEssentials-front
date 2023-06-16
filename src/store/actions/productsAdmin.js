import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const products_read = createAsyncThunk('products_read', async () => {
    try {
        
        let res = await axios(apiUrl+'products')
        return {products:res.data.products}
        
    } catch (error) {
        console.log(error)
        return {
            products:[]
            }}})

const actions={products_read}
export default  actions