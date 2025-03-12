
import React, {useEffect, useState} from "react";

import like from "../resources/img/likeIcon.png";
import liked from "../resources/img/likedIcon.png";
import save from "../resources/img/saveIcon.png";
import saved from "../resources/img/savedIcon.png";

const Image = (props) => {

    const image = props.data;
    

    const [saveIcon , setSaveIcon] = useState(save);

    const [savedImages, setSavedImages] = useState(JSON.parse(localStorage.getItem('savedImages')) || [])


    const [isSaved , setSaved] = useState(false);


    useEffect ( () => {

        let tempImage = {...image};

        tempImage.saved = isSaved;



        if(isSaved){


            

            setSaveIcon(saved);

            tempImage.saved = true;

            setSavedImages([...savedImages, tempImage]);



        }else
         if(savedImages.length && !isSaved){

            setSaveIcon(save);


            setSavedImages([...savedImages.splice(...savedImages.filter((stringImg) => {
                let img = JSON.parse(stringImg);

                if(img.id === tempImage.id){
                    return true;
                }else{
                    return false;
                }

            }))]);



        }

    }, [isSaved])

    useEffect( () => {

        console.log(savedImages);

        if(savedImages.length){
            localStorage.setItem('savedImages', JSON.stringify(savedImages));
        }

    }, [savedImages])


    const toggleSaved = () => {
        setSaved(!isSaved);
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