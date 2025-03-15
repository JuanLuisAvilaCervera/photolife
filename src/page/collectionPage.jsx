import React, { useEffect, useState } from "react";
import ImageGroup from "../components/ImageGroup";

export const CollectionPage = () => {

    const images = localStorage.getItem('savedImages') ? JSON.parse(localStorage.getItem('savedImages')) : [];


    return (
        <div id="main">
            {images ? <ImageGroup data={images} type="images"/> : <p>No hay imagenes guardadas</p>}
        </div>
    )
}