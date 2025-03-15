import React, { useState } from "react";

const DataModal = ({visible}) => {

    const [visibility , setVisibility] = useState(visible);

    const handleClick = () => {
        setVisibility(!visibility)
    }


    return(
        <div id="modal" className={visibility ? "visible" : "hidden"} onClick={handleClick}>
            <div id="modal-content" >
                {/* <img src="" alt="" /> */}
                <div className="description">
                    <ul>
                        <li>Dimensions:</li>
                        <li>Upload date:</li>
                        <li>Description:</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );

}



export default DataModal;