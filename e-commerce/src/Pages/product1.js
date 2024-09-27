import React, { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/productdisplay";
import BreadCrum1 from "../Components/BreadCrums/breadcrum1";
import ProductDisplay1 from "../Components/ProductDisplay/productdisplay1";

const Product1 = ()=>{
    const {womens_product} = useContext(ShopContext);
    const {womensproductId} = useParams();
   
    const womensproduct = womens_product?.find((e)=>e.id === Number(womensproductId))
    
    return(
        <div>
          <BreadCrum1 womensproduct={womensproduct}/>
         <ProductDisplay1 womensproduct={womensproduct} />
        </div>
    )

}
export default Product1;