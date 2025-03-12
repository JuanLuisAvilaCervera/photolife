import React, { useState } from "react";
import OrderSelector from "./OrderSelector";

import Image from "./Image";

const ImageGroup = (images) => {


    return (
        <div>
            <div id="orderSelectorDiv"><OrderSelector type="selector"/></div>
            {
                images.data.map((image, index) => {
                    
                    return(<Image data={image} key={index}/>);
                })

            }
        </div>
    );
};

export default ImageGroup;

