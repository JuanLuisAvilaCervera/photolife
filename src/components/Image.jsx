
import React, {useEffect, useState} from "react";

import like from "../resources/img/likeIcon.png";
import liked from "../resources/img/likedIcon.png";
import save from "../resources/img/saveIcon.png";
import saved from "../resources/img/savedIcon.png";

const Image = (props) => {

    const image = props.data;
    

    const [saveIcon , setSaveIcon] = useState(save);

    const [savedImages, setSavedImages ] = useState([])


    const [isSaved , setSaved] = useState(false);


    useEffect ( () => {

        let tempImage = {...image};

        console.log(isSaved);


        if(isSaved){

            console.log()

            setSavedImages(JSON.parse(getSaved()));

            setSaveIcon(saved);

            tempImage.saved = true;

            setSavedImages([...savedImages, JSON.stringify(tempImage)]);

        }else if(savedImages && !isSaved){

            setSavedImages(JSON.parse(getSaved()));

            setSaveIcon(save);

            tempImage.saved = false;

            setSavedImages(...savedImages.splice(...savedImages.filter(!saved)));

        }


        localStorage.setItem('savedImages', JSON.stringify(savedImages));


    }, [isSaved])

    const toggleSaved = () => {
        setSaved(!isSaved);
    }

    const getSaved = () => {
        if(!localStorage.getItem('savedImages')){
            localStorage.setItem('savedImages',"[]")
        }

        return localStorage.getItem('savedImages');
    }

    return <div className="imageContainer">
                <img className="image" src={image.urls.small}/>
                <div className="imageHover">
                    <img className="saveIcon" src={saveIcon} alt="Save in My Collection"
                        onClick={toggleSaved} />
                    <img className="likeIcon" src={like} alt="Like this image" />
                    <p className="number-likes">35</p>
                </div>
            </div>
}

export default Image;