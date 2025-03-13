import { createAsyncThunk } from "@reduxjs/toolkit";


const favoriteThunk = createAsyncThunk("favorites/getFavorites", async () => {
    try {
        
        const URL = `https://api.unsplash.com/photos/random/?client_id=XJRRzTbfbe5AjXyOB0P12vubcHla7uqMRIn7P8fN6m0&count=20`; 
        const response = await fetch(URL)
        const data = response.json(); //await response.json
        return data;

    } catch (error) {
        console.log("Images not found")
    }
}

)


export default favoriteThunk;