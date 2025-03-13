import React, { useEffect, useState } from "react";
import Masonry,{ResponsiveMasonry} from "react-responsive-masonry";
import DataModal from "./DataModal";

import Image from "./Image";

const ImageGroup = (images) => {

    const [tempImages , setTempImages] = useState([...images.data]);
    const [order, setOrder] = useState("recent");
    const [isModalVisible, setModal] = useState(false);

    // const IMAGENES GUARDADAS

    //useEffect{ LOCALSTORAGE SET ITEM}

    useEffect(() => {
        setTempImages([...images.data]);
    }, [images])

    useEffect(() => {
        handleOrder();
    }, [order]);

    const handleOrder = () => {

        setTempImages([...images.data].sort((a,b) => {


            switch(order){
                case "recent":
                    return new Date(b.created_at) - new Date(a.created_at);
                case "height_up":
                    return a.height - b.height;
                case "height_down":
                    return b.height - a.height;
                case "width_up":
                    return a.width - b.width;

                case "width_down":
                    return b.width - a.width;

                case "most_liked":
                    return b.likes - a.likes
                default:
                    return 0;
            }
        }));

        
    }

    const toggleModal = () => {
        setModal(!isModalVisible)
    };

    return (
        <div>
            <div id="orderSelectorDiv">

                    <select id="orderSelector"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}>
                        <option value="recent"> Recently Added </option>
                        <option value="height_up"> Height ^ </option>
                        <option value="height_down"> Height v </option>
                        <option value="width_up"> Width ^ </option>
                        <option value="width_down"> Width v </option>
                        <option value="most_liked"> Most Liked </option>
                    </select>

            </div>

            <ResponsiveMasonry
                columnsCountBreakPoints={{400: 1, 500: 2, 800:3,  1000: 4}}
                gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
            ><Masonry>{
                tempImages.map((image, index) => {
                    return(<Image data={image} key={index} onClick={(e) => {
                        e.stopPropagation;
                        toggleModal();
                    }}/>);
                })

            }</Masonry></ResponsiveMasonry>

            <DataModal visible={isModalVisible}/>
        </div>
    );
};

export default ImageGroup;

