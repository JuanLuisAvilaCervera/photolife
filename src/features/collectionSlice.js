import { createSlice } from "@reduxjs/toolkit";
import { CollectionThunk } from "./collectionThunk";



export const CollectionSlice = createSlice({

    name: 'collection',
    initialState: {
        state: 'idle',
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(CollectionThunk.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(CollectionThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(CollectionThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
    
})

export const getCollectionData = ( state ) => state.collection.data
export const getCollectionStatus = (state) => state.collection.status
export const getCollectionError = (state) => state.collection.error