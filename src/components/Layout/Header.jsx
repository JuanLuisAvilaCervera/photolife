import React from "react";
import CollectionButton from "./CollectionButton";
import { useNavigate } from "react-router";

const Header = ()  => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("");
    }


    return (
        <header>
            <p id="appLogo"
                onClick={handleClick}>PhotoLife</p>
            {/* <HeaderIntro />*/}
            <CollectionButton /> 
        </header>
    )
}

export default Header;