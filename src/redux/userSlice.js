import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./baseUrl";
import toast from "react-hot-toast";

//login
export const adminLogin = createAsyncThunk(
  "admin/login",
  async (data, { rejectWithValue }) => {
    return await axios
      .post(`${BASE_URL}/api/auth/login`, data)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("adminId", res.data.user._id);
        }
        toast.success('Login successsfull')
        return res.data;
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

//get user by id
export const adminById = createAsyncThunk(
  "user/byId",
  async (id, { rejectWithValue }) => {
    console.log(id)
    return await axios.get(`${BASE_URL}/api/auth/user/${id}`)
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

const initialState = {
  admin: null,
  token: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    //login
    builder.addCase(adminLogin.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      console.log(action.payload.user);
      // console.log(action.payload.token);
      return {
        ...state,
        admin: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    });
    builder.addCase(adminLogin.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //adminbyid
    builder.addCase(adminById.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(adminById.fulfilled, (state, action) => {
      // console.log(action.payload);
      return { ...state, admin: action.payload, loading: false };
    });
    builder.addCase(adminById.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });
  },
});

export default userSlice.reducer;
