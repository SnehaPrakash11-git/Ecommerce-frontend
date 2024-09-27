import React from "react";
import { Link } from "react-router-dom";

const KidsItem =(props)=>{
    return(
        <div className="kids-item">
            <Link to={`/kids-product/${props.id}`}><img src={props.image} alt=""></img></Link>
            <p>{props.name}</p>
            <div className="kids-item-prices">
                <div className="kids-item-price-new">
                ${props.new_price}
                </div>
                <div className="kids-item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default KidsItem;