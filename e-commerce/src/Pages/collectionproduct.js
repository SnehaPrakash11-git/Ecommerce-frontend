import React, { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import DescriptionBox from "../Components/DescriptionBox/descriptionbox";
import RelatedProducts from "../Components/RelatedProducts/relatedproducts";
import DataBreadCrum from "../Components/BreadCrums/databreadcrum";
import DataProductDisplay from "../Components/ProductDisplay/dataproductdisplay";
import CollectionBreadCrum from "../Components/BreadCrums/collectionbreadcrum";
import CollectionDisplay from "../Components/ProductDisplay/collectiondisplay";

const CollectionProduct = ()=>{
    const {new_collection} = useContext(ShopContext);
    const {collectionId} = useParams();
   
    const collectionproduct = new_collection?.find((e)=>e.id === Number(collectionId))
    
    return(
        <div>
         <CollectionBreadCrum collectionproduct={collectionproduct}  />
         <CollectionDisplay collectionproduct={collectionproduct} />
         <DescriptionBox/>
         <RelatedProducts/>
        </div>
    )

}
export default CollectionProduct;