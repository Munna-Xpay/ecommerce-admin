import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./baseUrl";
import toast, { Toaster } from "react-hot-toast";

//all orders
export const getAllOrders = createAsyncThunk(
  "all/orders",
  async (args, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios
      .get(`${BASE_URL}/api/auth/all-orders`, {
        headers: {
          "Content-Type": "application/json",
          user_token: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

//all orders by category
export const orderByCategory = createAsyncThunk(
  "order/category",
  async (query, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios
      .get(`${BASE_URL}/api/auth/get-orders`, {
        params: query,
        headers: {
          "Content-Type": "application/json",
          user_token: `Bearer ${token}`,
        },
      })
      .then((res) => {
      //  console.log(res);
        return res.data;
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

export const fetchOrderStat = createAsyncThunk(
  "/fetch/all/orders",
  async (args, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios
      .get(`${BASE_URL}/api/admin/get-orders-by-month`, {
        headers: {
          "Content-Type": "application/json",
          user_token: `Bearer ${token}`,
        },
      })
      .then((res) => {
       // console.log(res);
        return res.data;
      })
      .catch((err) => rejectWithValue("Something went wrong ! network error"));
  }
);

export const updateOrder = createAsyncThunk(
  "/update-order",
  async ({ data, id,socket,userId,title }, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios
      .put(`${BASE_URL}/api/admin/update-order/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          user_token: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if(res.status===200){
          socket.emit("sendUpdate", { receiverId: userId, msg: `${title} has ${data.orderStatus}` })
          toast.success("Order status updated");
          return res.data;
        }
      })
      .catch((err) => {
        // console.log(err.response.data);
        toast.error("Somethin went wrong!");
        return rejectWithValue(err.response.data);
      });
  }
);

const initialState = {
  allOrders: [],
  orderStat: [],
  orderCategory: [],
  error: "",
  loading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchOrderStat.pending, (state) => {
      return { ...state, loading: true };
    });

    builder.addCase(fetchOrderStat.fulfilled, (state, action) => {
      return { ...state, orderStat: action.payload, loading: false };
    });

    builder.addCase(fetchOrderStat.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //all orders
    builder.addCase(getAllOrders.pending, (state) => {
      return { ...state, loading: true };
    });

    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      return { ...state, allOrders: action.payload, loading: false };
    });

    builder.addCase(getAllOrders.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //order by category
    builder.addCase(orderByCategory.pending, (state) => {
      return { ...state, loading: true };
    });

    builder.addCase(orderByCategory.fulfilled, (state, action) => {
      return { ...state, orderCategory: action.payload, loading: false };
    });

    builder.addCase(orderByCategory.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //update order
    builder.addCase(updateOrder.pending, (state) => {
      return { ...state, loading: true };
    });

    builder.addCase(updateOrder.fulfilled, (state, action) => {
      return { ...state, allOrders: action.payload, loading: false };
    });

    builder.addCase(updateOrder.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });
  },
});

export default orderSlice.reducer;
