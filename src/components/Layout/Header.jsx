import React from "react";
import CollectionButton from "./CollectionButton";

const Header = ()  => {
    return (
        <header>
            <p id="appLogo">PhotoLife</p>
            {/* <HeaderIntro />*/}
            <CollectionButton /> 
        </header>
    )
}

export default Header;