import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const  curriculums_read  = createAsyncThunk(' curriculums_read ', async () => {
    try {
        let res = await axios(apiUrl+'admin/curriculums')
        return {curriculums:res.data.curriculums}
     
        
    } catch (error) {
        console.log(error)
        return {
            curriculums:[]
        }}})

const actions= { curriculums_read }
export default  actions