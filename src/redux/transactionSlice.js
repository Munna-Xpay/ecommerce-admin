import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';
import toast, { Toaster } from 'react-hot-toast';


export const fetchAllTransaction = createAsyncThunk('/fetch/all/transaction', async (sort, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/admin/get-all-transaction?${sort}=true`, {
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

const initialState = {
    allTransaction: [],
    error: "",
    loading: false
}

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllTransaction.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllTransaction.fulfilled, (state, action) => {
            return { ...state, allTransaction: action.payload, loading: false }
        })

        builder.addCase(fetchAllTransaction.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default transactionSlice.reducer;