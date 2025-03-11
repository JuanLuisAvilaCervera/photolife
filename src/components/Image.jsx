
import React, {useEffect, useState} from "react";

import like from "../resources/img/likeIcon.png";
import liked from "../resources/img/likedIcon.png";
import save from "../resources/img/saveIcon.png";
import saved from "../resources/img/savedIcon.png";

const Image = (props) => {



    var image = props.data.image;
    const index = props.data.index;

    const [saveIcon , setSaveIcon] = useState(save);

    const [savedImages, setSavedImages ] = useState([])


    const [isSaved , setSaved] = useState(false);


    useEffect ( () => {
        if(isSaved){

            setSaveIcon(save);

            let savedImages = JSON.parse(getSaved());

            console.log(savedImages);

            console.log(image);

            let tempImage = JSON.parse(JSON.stringify(image));

            tempImage.saved = true;

            Object.preventExtensions(tempImage);

            console.log(tempImage);

            // savedImages = [...savedImages, JSON.stringify(image)];

            // localStorage.setItem('savedImages', savedImages);

        }
    }, [isSaved])

    const toggleSaved = () => {
        setSaved(!isSaved);

        if(isSaved){
            setSaveIcon(saved);
        }else{
            setSaveIcon(save);
        }
    }

    const getSaved = () => {
        if(!localStorage.getItem('savedImages')){
            localStorage.setItem('savedImages',"[]")
        }

        return localStorage.getItem('savedImages');
    }

    return <div className="imageContainer">
                <img className="image" src={image.urls.small} key={index}/>
                <div className="imageHover">
                    <img className="saveIcon" src={saveIcon} alt="Save in My Collection"
                        onClick={toggleSaved} />
                    <img className="likeIcon" src={like} alt="Like this image" />
                    <p className="number-likes">35</p>
                </div>
            </div>
}

export default Image;