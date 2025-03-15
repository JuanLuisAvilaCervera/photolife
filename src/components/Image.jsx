
import React, {useEffect, useState} from "react";

import like from "../resources/img/likeIcon.png";
import liked from "../resources/img/likedIcon.png";
import save from "../resources/img/saveIcon.png";
import saved from "../resources/img/savedIcon.png";

const Image = (props) => {

    const image = props.data;
    

    const [saveIcon , setSaveIcon] = useState(save);
    const [isSaved , setSaved] = useState( () => {
        const imgList = JSON.parse(localStorage.getItem('savedImages')) || [];

        return imgList.filter((img) => img.id === image.id).length
        
    });


    const [likeIcon , setLikeIcon] = useState(like);
    const [isLiked , setLiked] = useState(false);



    useEffect ( () => {
        let tempImage = {...image};

        tempImage.saved = isSaved;

        const savedImages = JSON.parse(localStorage.getItem('savedImages') ) || [];

        if(isSaved){
            setSaveIcon(saved);
            

            if(!savedImages.filter( (img) => tempImage.id === img.id).length){
                savedImages.unshift(tempImage);
            }

            localStorage.setItem('savedImages',JSON.stringify(savedImages));

        }else{
            
            localStorage.setItem('savedImages',JSON.stringify(savedImages.filter((img) => (img.id !== tempImage.id))));

            setSaveIcon(save);
        }

    }, [isSaved])

    useEffect( () => {
        if(isLiked){
            setLikeIcon(liked);
        }else{
            setLikeIcon(like);
        }
    }, [isLiked])



    const toggleSaved = () => {
        setSaved(!isSaved);

        // if(!isSaved){
        //     sliceImages();
        // }
    }
    const toggleLiked = () => {
        setLiked(!isLiked);
    }

    // const sliceImages = () => {

    //     let tempImage = {...image};

    //     localStorage.setItem('savedImages', []);
    // }


    return <div className="imageContainer">
                <img className="image" src={image.urls.small}/>
                <div className="imageHover">
                    <img className="saveIcon" src={saveIcon} alt="Save in My Collection"
                        onClick={toggleSaved} />
                    <img className="likeIcon" src={likeIcon} alt="Like this image"
                        onClick={toggleLiked}/>
                    <p className="number-likes">35</p>
                </div>
            </div>
}

export default Image;