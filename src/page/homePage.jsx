import React, { useEffect, useState } from "react";
import { getImagesData, getImagesStatus } from "../features/homeSlice";
import homeThunk from "../features/homeThunk";
import { useDispatch, useSelector } from "react-redux";
import ImageGroup from "../components/ImageGroup";

const HomePage = () => {

    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const imagesData = useSelector(getImagesData);
    const imagesStatus = useSelector(getImagesStatus);

    useEffect( () => {
        setIsLoading(true);
        if(!imagesStatus){
            dispatch(homeThunk());
        }else if(imagesStatus === 'fulfilled'){
            setImages(imagesData)
            setIsLoading(false);
        }else if(imagesStatus === 'rejected'){
            setIsLoading(false);
            // console.log("Error loading home images")
            //Mensaje directo al cliente
        }
    }, [dispatch, imagesStatus])

    return (
        <div>
            <ImageGroup data={images} type="images"/>
        </div>
    )
    
}
 // CAMBIAR NOMBRE FICHERO A MAYUSCULA
 // width : maxContent

export default HomePage;