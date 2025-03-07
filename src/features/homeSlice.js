import { createSlice } from "@reduxjs/toolkit";
import homeThunk from "./homeThunk";



export const HomeSlice = createSlice({

    name: 'images',
    initialState: {
        state: 'idle',
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(homeThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(homeThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            console.log(action.payload);
            state.data = action.payload;
        })
        .addCase(homeThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
    
})

export const getImagesData = ( state ) => state.images.data
export const getImagesStatus = (state) => state.images.status
export const getImagesError = (state) => state.images.error