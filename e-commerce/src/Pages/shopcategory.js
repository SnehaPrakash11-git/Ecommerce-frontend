import React from "react";
import "../Pages/shopcategory.css"
import { useContext } from "react";
import { ShopContext } from "../Context/shopcontext"
import data_product from "../Components/Assets/data";

import { ArrowDownOutlined } from "@ant-design/icons";
import Item from "../Components/Item/item";

const ShopCategory = (props)=>{
    const{mwk_product} = useContext(ShopContext)
    console.log("mwkproducts",mwk_product);
    console.log("ShopContext",ShopContext);
    
    
    return(
        <div className="shop-category">
            <img src={props.banner} alt=""></img>
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <ArrowDownOutlined/>
                </div>
            </div>
            <div className="shopcategory-products">
                {data_product?.map((item,i)=>{
                    if(props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
                 {/* {data_product.map((item)=>{
        return <Item  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })} */}
            </div>
        </div>
    )

}
export default ShopCategory;