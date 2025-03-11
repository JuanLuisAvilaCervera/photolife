import React from "react";

class OrderSelector extends React.Component {

    constructor(){
        super();

    }

    render(){
        return( 
                <select id="orderSelector">
                    <option value="recent"> Recently Added </option>
                    <option value="height-up"> Height ^ </option>
                    <option value="height-down"> Height v </option>
                    <option value="width-up"> Width ^ </option>
                    <option value="width-down"> Width v </option>
                    <option value="most-liked"> Most Liked </option>
                </select>
        );
    }


}

export default OrderSelector;