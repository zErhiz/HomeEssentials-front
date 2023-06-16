import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const products_read = createAsyncThunk('products_read', 
    async (response) => {
        console.log("response", response);
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
        let res = await axios(apiUrl+`products?category_id=${response.categoriesCheked.join(',')}&manufacturer_id=${response.manufacturerCheked.join(',')}&order=${response.filterPrice}`, headers)
        console.log("res.data.products", res.data.products);
        return {products:res.data.products}
    } catch (error) {
        console.log(error)
        return {
            products:[]
            }}})

const actions={products_read}
export default  actions


//let res = await axios(apiUrl+`products?category_id=${categoriesCheked.join(',')}`, headers)