import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const  cards_home_read  = createAsyncThunk(' cards_home_read ', async () => {
    try {
        let res = await axios(apiUrl+'products/sixcards')
        return {productsHome:res.data.products}
     
        
    } catch (error) {
        console.log(error)
        return {
            productsHome:[]
        }}})

const actions= { cards_home_read }
export default  actions