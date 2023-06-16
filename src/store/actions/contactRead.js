import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const  contact_read  = createAsyncThunk(' contact_read ', async () => {
    try {
        let res = await axios(apiUrl+'contact/get')
        return {contact:res.data.contact}
     
        
    } catch (error) {
        console.log(error)
        return {
            contact:[]
        }}})

const actions= { contact_read }
export default  actions