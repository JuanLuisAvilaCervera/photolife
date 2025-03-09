import React from "react";
import { useLocation } from "react-router";
import SearchBar from "./SearchBar";

const HeaderIntro = () => {

    let location = useLocation();

    if(location.pathname === "/"){
        return(
            <>
                <h2>Your life in an album, at the press of a button</h2>
                <SearchBar />
            </>
        );
    }else if(location.pathname === "/collection"){
        return(
            <>
                <h1>My Collection</h1>
            </>
        );
    }

    return (
        <>
            <h1>ERROR 404: PAGE NOT FOUND</h1>
        </>
        );

}

export default HeaderIntro