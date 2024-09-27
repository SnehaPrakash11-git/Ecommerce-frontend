import React from "react";
import "./breadcrum.css"
import { ArrowRightOutlined } from "@ant-design/icons";

const BreadCrum2 = (props)=>{
    const{kidsproduct} = props;
return(
    <div className="breadcrum">
        HOME<ArrowRightOutlined/>SHOP<ArrowRightOutlined/>{kidsproduct?.category}<ArrowRightOutlined/>{kidsproduct?.name}
        
        
    </div>
)
}

export default BreadCrum2;