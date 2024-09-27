import React from "react";
import "./breadcrum.css"
import { ArrowRightOutlined } from "@ant-design/icons";

const CollectionBreadCrum = (props)=>{
    const{collectionproduct} = props;
return(
    <div className="breadcrum">
        HOME<ArrowRightOutlined/>SHOP<ArrowRightOutlined/>{collectionproduct?.category}<ArrowRightOutlined/>{collectionproduct?.name}
        
        
    </div>
)
}

export default CollectionBreadCrum;