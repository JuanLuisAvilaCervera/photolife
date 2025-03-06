import { createSlice } from "@reduxjs/toolkit";
import { HomeThunk } from "./homeThunk";



export const HomeSlice = createSlice({

    name: 'images',
    initialState: {
        state: 'idle',
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(HomeThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(HomeThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(HomeThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
    
})

export const getImagesData = ( state ) => state.images.data
export const getImagesStatus = (state) => state.images.status
export const getImagesError = (state) => state.images.error