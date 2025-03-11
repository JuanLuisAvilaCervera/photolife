
import React, {useState} from "react";

import like from "../resources/img/likeIcon.png";
import liked from "../resources/img/likedIcon.png";
import save from "../resources/img/saveIcon.png";
import saved from "../resources/img/savedIcon.png";

const Image = (props) => {



    const image = props.data.image;
    const index = props.data.index;


    const [isSaved , setSaved] = useState(false);


    const handleSaved = () => {
        alert('Saved '+ index);
    }

    return <div className="imageContainer">
                <img className="image" src={image.urls.small} key={index}/>
                <div className="imageHover">
                    <img className="saveIcon" src={save} alt="Save in My Collection"
                        onClick={handleSaved} />
                    <img className="likeIcon" src={like} alt="Like this image" />
                    <p className="number-likes">35</p>
                </div>
            </div>
}

export default Image;