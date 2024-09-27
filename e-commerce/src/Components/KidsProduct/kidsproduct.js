import React from "react";
import kids_product from "../Assets/kids_product";
import "./kidsproduct.css"
import { ArrowDownOutlined } from "@ant-design/icons";
import KidsItem from "../KidsItem/kidsitem";

const KidsProduct = (props)=>{
    return(
        <div className="kids-product">
            <div className="kids-banner">
                <img width="900px"src={props.banner}></img>
            </div>
            <div className="kidsbanner-indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="kidsbanner-sort">
                    Sort by <ArrowDownOutlined/>
                </div>
            </div>
            <h1>Popular in Kids</h1>
            <hr/>
            <div className="kids">
                {kids_product.map((item,i)=>{
                     return <KidsItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
            <div className="kids-loadmore">
                Explore More
            </div>
        </div>
    )
}
export default KidsProduct;