import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';
import toast, { Toaster } from 'react-hot-toast';


export const fetchAllNotifications = createAsyncThunk('/fetch/all/notifications', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/admin/get-notification`, {
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

export const updateNotification = createAsyncThunk('/update/notifications', async ({ id, data }, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.put(`${BASE_URL}/api/admin/update-notification/${id}`, data, {
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
    allNotifications: [],
    error: "",
    loading: false
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllNotifications.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllNotifications.fulfilled, (state, action) => {
            return { ...state, allNotifications: action.payload, loading: false }
        })

        builder.addCase(fetchAllNotifications.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(updateNotification.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(updateNotification.fulfilled, (state, action) => {
            return { ...state, allNotifications: action.payload, loading: false }
        })

        builder.addCase(updateNotification.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default notificationSlice.reducer;