import React, { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import DescriptionBox from "../Components/DescriptionBox/descriptionbox";
import RelatedProducts from "../Components/RelatedProducts/relatedproducts";
import DataBreadCrum from "../Components/BreadCrums/databreadcrum";
import DataProductDisplay from "../Components/ProductDisplay/dataproductdisplay";

const DataProduct = ()=>{
    const {data_product} = useContext(ShopContext);
    const {dataproductId} = useParams();
   
    const dataproduct = data_product?.find((e)=>e.id === Number(dataproductId))
    
    return(
        <div>
         <DataBreadCrum dataproduct={dataproduct}  />
         <DataProductDisplay dataproduct={dataproduct} />
         <DescriptionBox/>
         <RelatedProducts/>
        </div>
    )

}
export default DataProduct;