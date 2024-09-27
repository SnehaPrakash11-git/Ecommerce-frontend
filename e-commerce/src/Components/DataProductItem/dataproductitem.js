import React from "react";
// import "./womensitem.css"
import { Link } from "react-router-dom";

const DataProductItem =(props)=>{
    return(
        <div className="womens-item">
            <Link to={`/data-product/${props.id}`}><img src={props.image} alt=""></img></Link>
            <p>{props.name}</p>
            <div className="womens-item-prices">
                <div className="womens-item-price-new">
                ${props.new_price}
                </div>
                <div className="womens-item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default DataProductItem;