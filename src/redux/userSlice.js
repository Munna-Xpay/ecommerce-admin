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
    //console.log(id)
    return await axios.get(`${BASE_URL}/api/auth/user/${id}`)
      .then((res) => {
        //console.log(res)
        return res.data
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

//get user with stat
export const fetchUsersStat = createAsyncThunk(
  "fetch/user/stat",
  async (args, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios.get(`${BASE_URL}/api/auth/all-users-with-stat`, {
      headers: {
        "Content-Type": "application/json",
        user_token: `Bearer ${token}`,
      }
    })
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

//get user conversion rate
export const fetchUserConversionRate = createAsyncThunk(
  "fetch/user/conversion/rate",
  async (args, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios.get(`${BASE_URL}/api/auth/users-conversion-rate`, {
      headers: {
        "Content-Type": "application/json",
        user_token: `Bearer ${token}`,
      }
    })
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

//get all users
export const fetchAllUsers = createAsyncThunk(
  "fetch/all/user",
  async (sort, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    return await axios.get(`${BASE_URL}/api/auth/all-users?${sort}=true`, {
      headers: {
        "Content-Type": "application/json",
        user_token: `Bearer ${token}`,
      }
    })
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

//profile edit
export const profileEdit = createAsyncThunk(
  "user/profile",
  async (userData, { rejectWithValue }) => {
    const id = localStorage.getItem("adminId");
    const token = localStorage.getItem("token");
    //console.log(token);
    return await axios
      .put(`${BASE_URL}/api/auth/update-profile/${id}`, userData, {
        headers: {
          "Content-Type": "application/json",
          user_token: `Bearer ${token}`,
        },
      }).then(res => {
        console.log(res)
        toast.success("Admin profile updated successfully")
        return res.data
      })
      .catch((err) => {
        toast.error("Somthing went wrong !, Failed to update")
        return rejectWithValue(err.response.data)
      });
  }
);

//profile pic update
export const updateProfilePic = createAsyncThunk(
  "user/profile/picture",
  async (userData, { rejectWithValue }) => {
    const id = localStorage.getItem("adminId");
    const token = localStorage.getItem("token");
    //console.log(token);
    return await axios.put(`${BASE_URL}/api/auth/update-profile-picture/${id}`, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "user_token": `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res)
        toast.success("Admin profile picture updated successfully")
        return res.data
      })
      .catch((err) => {
        toast.error("Failed to updated Admin profile picture")
        return rejectWithValue(err.response.data)
      });
  }
);

const initialState = {
  admin: null,
  token: null,
  userStat: {},
  allUsers: [],
  userConversionRate: [],
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


    builder.addCase(profileEdit.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(profileEdit.fulfilled, (state, action) => {
      // console.log(action.payload);
      return { ...state, admin: action.payload, loading: false };
    });
    builder.addCase(profileEdit.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });


    builder.addCase(updateProfilePic.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(updateProfilePic.fulfilled, (state, action) => {
      // console.log(action.payload);
      return { ...state, admin: action.payload, loading: false };
    });
    builder.addCase(updateProfilePic.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });


    builder.addCase(fetchUsersStat.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchUsersStat.fulfilled, (state, action) => {
      return { ...state, userStat: action.payload, loading: false };
    });
    builder.addCase(fetchUsersStat.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });


    builder.addCase(fetchAllUsers.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      return { ...state, allUsers: action.payload, loading: false };
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });


    builder.addCase(fetchUserConversionRate.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchUserConversionRate.fulfilled, (state, action) => {
      return { ...state, userConversionRate: action.payload, loading: false };
    });
    builder.addCase(fetchUserConversionRate.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

  },
});

export default userSlice.reducer;
