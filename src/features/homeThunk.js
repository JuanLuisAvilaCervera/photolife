import { createAsyncThunk } from "@reduxjs/toolkit";


export const HomeThunk = createAsyncThunk("images/getImages", async () => {
    try {

        const URL = `https://api.unsplash.com/photos/random/?client_id=1MukAIomcq9R4JyV4VGwGg9K4mxD7Mhp4QmCOxiclpU&count=20`;
        const response = await fetch(URL)
        const json = response.json; //await response.json
        return json;

    } catch (error) {
        console.log("Images not found")
    }
}

)