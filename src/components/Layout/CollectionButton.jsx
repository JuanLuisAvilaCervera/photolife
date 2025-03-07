import React from "react";
import { useNavigate} from "react-router";
import icon from "../../resources/img/saveIcon.png";

const CollectionButton = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("collection");
    }

    return (
        <>
            <button onClick={handleClick}>
            <img src={icon} style={{width: 20}}
                alt="" /></button>
        </>);

}

export default CollectionButton