import React from "react";
import "./breadcrum.css"
import { ArrowRightOutlined } from "@ant-design/icons";

const BreadCrum1 = (props)=>{
    const{womensproduct} = props;
return(
    <div className="breadcrum">
        HOME<ArrowRightOutlined/>SHOP<ArrowRightOutlined/>{womensproduct?.category}<ArrowRightOutlined/>{womensproduct?.name}
        
        
    </div>
)
}

export default BreadCrum1