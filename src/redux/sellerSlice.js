import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';
import toast, { Toaster } from 'react-hot-toast';


export const fetchAllSellersStat = createAsyncThunk('/fetch/all/sellers', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/admin/get-sales-activity`, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
        .then(res => {
            // console.log(res)
            return res.data
        })
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

export const fetchAllSellersWithSalesDetails = createAsyncThunk('/fetch/all/sellers-with-sales', async (query, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    // console.log(query)
    return await axios.get(`${BASE_URL}/api/admin/get-income-seller?${query}=true`, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
        .then(res => {
            // console.log(res)
            return res.data
        })
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

export const fetchAllSellersWithDailySalesDetails = createAsyncThunk('/fetch/all/daily-sellers-with-sales', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/admin/get-period-sales-revenue`, {
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

export const addSeller = createAsyncThunk('/add/seller', async (data, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    console.log(data)
    return await axios.post(`${BASE_URL}/api/admin/add-seller`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
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
    allSellers: [],
    sallerSalesStat: [],
    dailySellerSalesStat: [],
    error: "",
    loading: false
}

const sellerSlice = createSlice({
    name: "seller",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllSellersStat.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllSellersStat.fulfilled, (state, action) => {
            return { ...state, sallerSalesStat: action.payload, loading: false }
        })

        builder.addCase(fetchAllSellersStat.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(fetchAllSellersWithSalesDetails.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllSellersWithSalesDetails.fulfilled, (state, action) => {
            return { ...state, allSellers: action.payload, loading: false }
        })

        builder.addCase(fetchAllSellersWithSalesDetails.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(addSeller.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(addSeller.fulfilled, (state, action) => {
            return { ...state, allSellers: action.payload, loading: false }
        })

        builder.addCase(addSeller.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(fetchAllSellersWithDailySalesDetails.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllSellersWithDailySalesDetails.fulfilled, (state, action) => {
            return { ...state, dailySellerSalesStat: action.payload, loading: false }
        })

        builder.addCase(fetchAllSellersWithDailySalesDetails.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default sellerSlice.reducer;