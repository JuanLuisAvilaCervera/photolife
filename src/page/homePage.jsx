import React, { useEffect, useState } from "react";
import { ImageGroup } from "../components/ImageGroup";
import { getImagesData } from "../features/homeSlice";
import { HomeThunk } from "../features/homeThunk";

const HomePage = () => {

    const [images, setImages] = useState("");

    useEffect( () => {
        setImages(getImagesData());
    }, [])

    return (
        <div>
            <ImageGroup data={images}/>
        </div>
    )
    
}

export default HomePage;