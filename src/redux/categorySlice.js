import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./baseUrl";

//get price by category
export const getPriceByCategory = createAsyncThunk(
  "category/price",
  async (args, { rejectWithValue }) => {
    const token =localStorage.getItem('token')
    return await axios
      .get(`${BASE_URL}/api/admin/price-by-category`, {
        headers: {
          "Content-Type": "application/json",
          user_token: `Bearer ${token}`,
        }
      })
      .then((res) => {
     // console.log(res.data);
        return res.data;
      }).catch((err)=>
     rejectWithValue(err.response.data))
  }
);

//products by category
export const getProductsByCategory = createAsyncThunk(
    "category/products",
    async (args, { rejectWithValue }) => {
      const token =localStorage.getItem('token')
      return await axios
        .get(`${BASE_URL}/api/admin/product-by-category`, {
          headers: {
            "Content-Type": "application/json",
            user_token: `Bearer ${token}`,
          },
        })
        .then((res) => {
       // console.log(res.data);
          return res.data;
        }).catch((err)=>
       rejectWithValue(err.response.data))
    }
  );

  //category product seller
  export const getSellerProductsByCategory = createAsyncThunk(
    "seller/category/products",
    async (args, { rejectWithValue }) => {
      const token =localStorage.getItem('token')
      return await axios
        .get(`${BASE_URL}/api/admin/seller-category`, {
          headers: {
            "Content-Type": "application/json",
            user_token: `Bearer ${token}`,
          },
        })
        .then((res) => {
       // console.log(res.data);
          return res.data;
        }).catch((err)=>
       rejectWithValue(err.response.data))
    }
  );


const initialState={
    categoryPrice:[],
    categoryProducts:[],
    categorySeller:[],
    loading:false,
    error:""
}

const categorySlice = createSlice({
    name:'category',
    initialState,
    extraReducers:(builder)=>{
        
        //get price by category
        builder.addCase(getPriceByCategory.pending, (state)=>{
            return {...state,loading:true}
        })
        builder.addCase(getPriceByCategory.fulfilled, (state,action)=>{
           // console.log(action.payload);
            return{...state,categoryPrice:action.payload,loading:false}
        })
        builder.addCase(getPriceByCategory.rejected,(state,action)=>{
            return {...state,error:action.payload,loading:false}
        })


        //products by category
        builder.addCase(getProductsByCategory.pending, (state)=>{
            return {...state,loading:true}
        })
        builder.addCase(getProductsByCategory.fulfilled, (state,action)=>{
            //console.log(action.payload);
            return{...state,categoryProducts:action.payload,loading:false}
        })
        builder.addCase(getProductsByCategory.rejected,(state,action)=>{
            return {...state,error:action.payload,loading:false}
        })

        //seller product
        builder.addCase(getSellerProductsByCategory.pending, (state)=>{
          return {...state,loading:true}
      })
      builder.addCase(getSellerProductsByCategory.fulfilled, (state,action)=>{
         // console.log(action.payload);
          return{...state,categorySeller:action.payload,loading:false}
      })
      builder.addCase(getSellerProductsByCategory.rejected,(state,action)=>{
          return {...state,error:action.payload,loading:false}
      })
    }
})

export default categorySlice.reducer;
