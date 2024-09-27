import React from "react";
import "./breadcrum.css"
import { ArrowRightOutlined } from "@ant-design/icons";

const DataBreadCrum = (props)=>{
    const{dataproduct} = props;
return(
    <div className="breadcrum">
        HOME<ArrowRightOutlined/>SHOP<ArrowRightOutlined/>{dataproduct?.category}<ArrowRightOutlined/>{dataproduct?.name}
        
        
    </div>
)
}

export default DataBreadCrum;