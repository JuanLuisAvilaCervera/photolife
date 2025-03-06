import React from "react";

export const ImageGroup = (images) => {

    return (
        <div>
            {
                images.data.map((image, index) => {
                    return <div key={index}>
                        <img src={image.urls.small}/>
                    </div>
                })
            }
        </div>
    );
};
