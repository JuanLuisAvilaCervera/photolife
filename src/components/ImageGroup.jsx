import React from "react";
import OrderSelector from "./OrderSelector";

const ImageGroup = (images) => {


    const handleChange = () => {

    }


    return (
        <div id="imageGroup">
            <div id="orderSelectorDiv"><OrderSelector type="selector"/></div>
            {
                images.data.map((image, index) => {
                    return <div key={index}>
                        <img src={image.urls.small}
                            style={
                                {
                                    maxWidth:"95%"
                                }
                            }
                        
                        />
                    </div>
                })

            }
        </div>
    );
};

export default ImageGroup;

