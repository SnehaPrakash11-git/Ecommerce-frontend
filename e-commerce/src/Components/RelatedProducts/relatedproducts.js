import React from "react";
import "./relatedproducts.css"
import Item from "../Item/item";
import womens_product from "../Assets/womens_product";
import mens_product from "../Assets/mens-product";


const RelatedProducts =()=>{
    return(
        <div className="relatedproducts">
<h1>Related Products</h1>
<hr></hr>
<div className="relatedproducts-items">
    {mens_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
        </div>
    )
}
export default RelatedProducts;