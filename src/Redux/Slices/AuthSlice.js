import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from '../../Helpers/axioslnstances';

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: JSON.parse(localStorage.getItem('data')) || {}, // Parse data from localStorage
};

export const createAccount = createAsyncThunk("auth/signup", async (data) => { // Fix action name
    try {
        const res = await axiosInstance.post("user/register", data);
        // Use toast promise correctly
        const toastPromise = toast.promise(res, {
            loading: "Wait! Creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: (error) => { // Use a function for error message
                return error?.response?.data?.message;
            },
        });
        await toastPromise; // Wait for the toast to finish
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        throw error;
    }
});


export const login = createAsyncThunk("auth/login", async (data) => { // Fix action name
    try {
        const res = await axiosInstance.post("user/login", data);
        const toastPromise = toast.promise(res, {
            loading: "Wait! Authentication is progress",
            success: (data) => {
                return data?.data?.message;
            },
            error: (error) => { // Use a function for error message
                return error?.response?.data?.message;
            },
        });
        await toastPromise; // Wait for the toast to finish
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        throw error;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, action ) =>{
        localStorage.setItem("data", JSON.stringify(action?.payload?.user))
        localStorage.setItem("isloggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;  
      })
    }
});

export default authSlice.reducer;
