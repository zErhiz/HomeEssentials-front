import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const  manufacturers_read  = createAsyncThunk(' manufacturers_read ', async () => {
    try {
        let res = await axios(apiUrl+'manufacturers')
        return {manufacturers:res.data.manufacturers}
     
        
    } catch (error) {
        console.log(error)
        return {
            manufacturers:[]
        }}})

const actions= { manufacturers_read}
export default  actions