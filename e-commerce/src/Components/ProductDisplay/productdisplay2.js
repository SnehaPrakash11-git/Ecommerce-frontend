import React, { useContext } from "react";
import "./productdisplay.css"
import staricon from "../Assets/staricon.png"
import { ShopContext } from "../../Context/shopcontext";

const ProductDisplay1 = (props) =>{
    const {kidsproduct} = props;
    const{addToCart} = useContext(ShopContext)
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
<img src={kidsproduct.image} alt=""></img>
<img src={kidsproduct.image} alt=""></img>
<img src={kidsproduct.image} alt=""></img>
<img src={kidsproduct.image} alt=""></img>
                </div>
                <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={kidsproduct.image} alt=""></img>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{kidsproduct.name}</h1>
                <div className="productdisplay-right-star">
                    <img width="50px"src={staricon}alt=""></img>
                    <img width="50px"src={staricon}alt=""></img>
                    <img width="50px"src={staricon}alt=""></img>
                    <img width="50px"src={staricon}alt=""></img>
                    <img width="50px"src={staricon}alt=""></img>
                    {/* <img style={{width:"40px"}} src={stardullicon} alt=""></img> */}
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${kidsproduct.old_price}</div>
                    <div className="productdisplay-right-price-new">${kidsproduct.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and full sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(kidsproduct.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women , T-Shirt , Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay1;