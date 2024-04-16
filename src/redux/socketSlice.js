import { io } from "socket.io-client";
import { BASE_URL } from "./baseUrl";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    socket:io(BASE_URL)
}
const socketSlice=createSlice({
    name:'socket',
    initialState,
    extraReducers:builder=>{

    }
})
export default socketSlice.reducer;