import { configureStore } from "@reduxjs/toolkit";
import { HomeSlice } from "../features/homeSlice";
import { FavoriteSlice } from "../features/favoriteSlice";


export const Store = configureStore ({
    reducer: {
        images: HomeSlice.reducer,
        favorites: FavoriteSlice.reducer
    }

})

export default Store;