import React from "react";
import womens_product from "../Assets/womens_product";
import "./womensproduct.css"
import { ArrowDownOutlined } from "@ant-design/icons";
import WomensItem from "../WomensItem/womensitem";

const WomensProduct = (props)=>{
    return(
        <div className="womens-product">
            <div className="womens-banner">
                <img src={props.banner}></img>
            </div>
            <div className="womesbanner-indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="womensbanner-sort">
                    Sort by <ArrowDownOutlined/>
                </div>
            </div>
            <h1>Popular in Women</h1>
            <hr/>
            <div className="womens">
                {womens_product.map((item,i)=>{
                     return <WomensItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
            <div className="womens-loadmore">
                Explore More
            </div>
        </div>
    )
}
export default WomensProduct;