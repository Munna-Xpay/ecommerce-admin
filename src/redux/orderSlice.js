import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';
import toast, { Toaster } from 'react-hot-toast';


export const fetchOrderStat = createAsyncThunk('/fetch/all/orders', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/admin/get-orders-by-month`, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

const initialState = {
    allOrders: [],
    orderStat: [],
    error: "",
    loading: false
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchOrderStat.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchOrderStat.fulfilled, (state, action) => {
            return { ...state, orderStat: action.payload, loading: false }
        })

        builder.addCase(fetchOrderStat.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default orderSlice.reducer;