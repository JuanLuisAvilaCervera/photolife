import React from "react";
import { useLocation, useNavigate} from "react-router";
import emptyIcon from "../../resources/img/saveIcon.png";
import fullIcon from "../../resources/img/savedIcon.png";

const CollectionButton = () => {

    let navigate = useNavigate();
    let location = useLocation();

    const handleClick = () => {
        navigate("collection");
    }

    return (
        <>
            <button 
            id="collectionButton"            
            onClick={handleClick}>
            <img src={location.pathname === "/collection" ? ( fullIcon ) : (emptyIcon)}
                alt="" /></button>
        </>);

}

export default CollectionButton