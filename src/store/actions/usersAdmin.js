import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const usersAdmin = createAsyncThunk('usersAdmin', async () => {
    try {
        
        let res = await axios(apiUrl+'users')
        return {users:res.data.users}
        
    } catch (error) {
        console.log(error)
        return {
            users:[]
            }}})

const actions={usersAdmin}
export default  actions