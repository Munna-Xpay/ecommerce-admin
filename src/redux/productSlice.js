import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./baseUrl";
import toast from "react-hot-toast";

//get products
export const getProducts = createAsyncThunk(
  "products",
  async (query, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios
      .get(`${BASE_URL}/api/admin/products-grid`, {
        params: query,
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

//add product
export const addProduct = createAsyncThunk(
  "add/product",
  async ({ data, navigate }, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios
      .post(`${BASE_URL}/api/product/add`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          user_token: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Product added");
        navigate("/product-grid");
        return res.data;
      })
      .catch((err) => {
        toast.error("Somethin went wrong!");
        return rejectWithValue(err.response.data);
      });
  }
);

export const getProductInProductsManagement = createAsyncThunk(
  "products/management",
  async ({ query, searchData }, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios
      .get(`${BASE_URL}/api/admin/products-management`, {
        params: { ...query, searchData },
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

export const deleteProduct = createAsyncThunk(
  "delete/product",
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios
      .delete(`${BASE_URL}/api/product/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          user_token: `Bearer ${token}`,
        },
      })
      .then((res) => id)
      .catch((err) => rejectWithValue(err.response.data));
  }
);

const initialState = {
  products: [],
  productsManagement: [],
  loading: false,
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    //get products
    builder.addCase(getProducts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // console.log(action.payload);
      return { ...state, products: action.payload, loading: false };
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //add products
    builder.addCase(addProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      // console.log(action.payload);
      return { ...state, products: action.payload, loading: false };
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //delete
    builder.addCase(deleteProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.products = state.products.filter((i) => i._id != action.payload);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //product management
    builder.addCase(getProductInProductsManagement.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(
      getProductInProductsManagement.fulfilled,
      (state, action) => {
        // console.log(action.payload);
        return { ...state, productsManagement: action.payload, loading: false };
      }
    );
    builder.addCase(
      getProductInProductsManagement.rejected,
      (state, action) => {
        return { ...state, error: action.payload, loading: false };
      }
    );
  },
});

export default productSlice.reducer;
