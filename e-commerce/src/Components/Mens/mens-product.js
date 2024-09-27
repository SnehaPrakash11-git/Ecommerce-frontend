import React from "react";
import "./mens.css"
import Item from "../Item/item";
import mens_product from "../Assets/mens-product";
import { ArrowDownOutlined } from "@ant-design/icons";

const MensProduct = (props)=>{
    return(
        <div className="mens-product">
            <div className="mens-banner">
                <img width="900px" src={props.banner}></img>
            </div>
            <div className="mensbanner-indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="mensbanner-sort">
                    Sort by <ArrowDownOutlined/>
                </div>
            </div>
            <h1>Popular in Men</h1>
            <hr/>
            <div className="mens">
                {mens_product.map((item,i)=>{
                     return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
            <div className="mens-loadmore">
                Explore More
            </div>
        </div>
    )
}
export default MensProduct;