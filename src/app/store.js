import { configureStore } from "@reduxjs/toolkit";
import { HomeSlice } from "../features/homeSlice";
import { CollectionSlice } from "../features/collectionSlice";


export const Store = configureStore ({
    reducer: {
        images: HomeSlice.reducer,
        favorites: CollectionSlice.reducer
    }

})

export default Store;