import React from "react";
import { Navigate} from "react-router";
import icon from "../../resources/img/saveIcon.png";



const CollectionButton = () => {

    const handleClick = () => {
        Navigate("collectionPage");
    }

    return (
    <>
        <button onClick={handleClick}><img src={icon} alt="" /></button>
    </>);
}

export default CollectionButton;