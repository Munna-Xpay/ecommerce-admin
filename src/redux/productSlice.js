import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from './baseUrl'

//get products
export const getProducts=createAsyncThunk(
    "products",
    async (query,{rejectWithValue})=>{
        const token=localStorage.getItem('token')
        return await axios.get(`${BASE_URL}/api/admin/products-grid`,{
            params:query,
            headers: {
                "Content-Type": "application/json",
                user_token: `Bearer ${token}`,
              }
        })
        .then((res) => {
            console.log(res);
              return res.data;
            }).catch((err)=>
           rejectWithValue(err.response.data))
    }
)  

const initialState={
    products:[],
    loading:false,
    error:""
}

const productSlice = createSlice({
    name:'products',
    initialState,
    extraReducers:(builder)=>{
        //get products
        builder.addCase(getProducts.pending, (state)=>{
            return {...state,loading:true}
        })
        builder.addCase(getProducts.fulfilled, (state,action)=>{
            console.log(action.payload);
            return {...state,products:action.payload,loading:false}
        })
        builder.addCase(getProducts.rejected, (state,action)=>{
            return {...state,error:action.payload,loading:false}
        })
    }
})

export default productSlice.reducer