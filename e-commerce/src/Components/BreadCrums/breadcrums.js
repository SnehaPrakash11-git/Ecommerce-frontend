import React from "react";
import "./breadcrum.css"
import { ArrowRightOutlined } from "@ant-design/icons";

const BreadCrum = (props)=>{
    const{product} = props;
return(
    <div className="breadcrum">
        HOME<ArrowRightOutlined/>SHOP<ArrowRightOutlined/>{product?.category}<ArrowRightOutlined/>{product?.name}
        
        
    </div>
)
}

export default BreadCrum