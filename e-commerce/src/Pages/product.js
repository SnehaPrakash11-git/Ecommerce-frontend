import React, { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrums/breadcrums";    
import ProductDisplay from "../Components/ProductDisplay/productdisplay";
import DescriptionBox from "../Components/DescriptionBox/descriptionbox";
import RelatedProducts from "../Components/RelatedProducts/relatedproducts";

const Product = ()=>{
    const {mens_product} = useContext(ShopContext);
    const {productId} = useParams();
   
    const product = mens_product?.find((e)=>e.id === Number(productId))
    console.log("product",product);
    
    return(
        <div>
         <BreadCrum product={product}  />
         <ProductDisplay product={product} />
         <DescriptionBox/>
         <RelatedProducts/>
        </div>
    )

}
export default Product;