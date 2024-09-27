import React from "react";
import Popular from "../Components/Popular/popular";
import Offers from "../Components/Offers/offers";
import NewCollections from "../Components/NewCollections/newcollections";
import NewsLetter from "../Components/NewLetter/newsletter";
import Footer from "../Components/Footer/footer";

const Shop = ()=>{
    return(
        <div>
            <Popular/>
            <Offers/>
            <NewCollections/>
             <NewsLetter/>
           
        </div>
    )

}
export default Shop;