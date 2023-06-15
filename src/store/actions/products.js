import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const products_read = createAsyncThunk('products_read', 
    async (categoriesCheked, /* manufacturer_id, filterPrice */) => {
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
        let res = await axios(apiUrl+`products?category_id=${categoriesCheked}`, headers)
        return {products:res.data.products}
    } catch (error) {
        console.log(error)
        return {
            products:[]
            }}})

const actions={products_read}
export default  actions


//let res = await axios(apiUrl+`products?category_id=${categoriesCheked.join(',')}`, headers)