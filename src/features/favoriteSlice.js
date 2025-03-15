import { createSlice } from "@reduxjs/toolkit";
import favoriteThunk from "./homeThunk";

 

export const FavoriteSlice = createSlice({

    name: 'images',
    initialState: {
        state: 'idle',
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(favoriteThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(favoriteThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(favoriteThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
    
})

export const getFavoritesData = ( state ) => state.images.data
export const getFavoritesStatus = (state) => state.images.status
export const getFavoritesError = (state) => state.images.error