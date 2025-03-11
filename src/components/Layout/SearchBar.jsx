import React from "react";
import { useState } from "react";

const SearchBar = () => {

    //SEND INFO TO SEARCH THUNK
    const [search, setSearch] = useState("");


    const handleClick = () =>{
        console.log(search)
    }

    const handleChange = () => {

    }

    return(
        <div id="searchBar">
            <input type="text"
                    id="searchBarInput"
                    onChange={handleChange}/>
            <button
                onClick={handleClick}
            >Search</button>
        </div>
    );

}

export default SearchBar;