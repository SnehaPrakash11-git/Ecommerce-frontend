import React, { createContext, useState } from "react";
import mens_product from "../Components/Assets/mens-product";
import womens_product from "../Components/Assets/womens_product";
import kids_product from "../Components/Assets/kids_product";
import data_product from "../Components/Assets/data";
import new_collection from "../Components/Assets/new-collections";


export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for(let index = 0; index < mens_product.length+1; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const[cartItems,setCartItems] =  useState(getDefaultCart());
    console.log("cartItems",cartItems)

const addToCart =(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
console.log(cartItems);

}
const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = mens_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
                console.log(" ",itemInfo);
                
            }
            return totalAmount; 
        }
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        return totalItem;
    }
    const contextValue={getTotalCartItems,mens_product,womens_product,kids_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,data_product,new_collection};
return (
<ShopContext.Provider value={contextValue}>     
    {props.children}    
</ShopContext.Provider>
)
}
export default ShopContextProvider;