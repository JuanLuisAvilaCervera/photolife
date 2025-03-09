import React from "react";

const ImageGroup = (images) => {

    return (
        <div id="imageGroup">
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

