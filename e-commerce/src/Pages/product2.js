import React, { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import BreadCrum2 from "../Components/BreadCrums/breadcrum2";
import ProductDisplay2 from "../Components/ProductDisplay/productdisplay2";

const Product2 = ()=>{
    const {kids_product} = useContext(ShopContext);
    const {kidsproductId} = useParams();
   
    const kidsproduct = kids_product?.find((e)=>e.id === Number(kidsproductId))
    
    return(
        <div>
          <BreadCrum2 kidsproduct={kidsproduct}/>
         <ProductDisplay2 kidsproduct={kidsproduct} />
        </div>
    )

}
export default Product2;