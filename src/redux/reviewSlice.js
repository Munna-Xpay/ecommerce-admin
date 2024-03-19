import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';
import toast, { Toaster } from 'react-hot-toast';


export const fetchAllReviewStat = createAsyncThunk('/fetch/all/review-with-sales', async (query, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    // console.log(query)
    return await axios.get(`${BASE_URL}/api/product/get-review-stat?${query}=true`, {
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
    allReviewStat: {},
    error: "",
    loading: false
}

const reviewSlice = createSlice({
    name: "seller",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllReviewStat.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllReviewStat.fulfilled, (state, action) => {
            return { ...state, allReviewStat: action.payload, loading: false }
        })

        builder.addCase(fetchAllReviewStat.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default reviewSlice.reducer;