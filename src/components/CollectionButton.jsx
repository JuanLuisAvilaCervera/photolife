import React from "react";
import { useNavigate } from "react-router";

export default CollectionButton = () => {

    const handleClick = () => {
        Navigate("collection");
    }

    return 
    <>
        <button onClick={handleClick}><img src="" alt="" /></button>
    </>
}