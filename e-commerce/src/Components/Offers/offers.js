import React from "react";
import "./offers.css"
import { Button } from "@mui/material";
import ExclusiveImage from "../Assets/exclusive-image"
import { Link } from "react-router-dom";

const Offers = ()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>

                <Link to="/offers">
                <Button variant="contained">Check Now</Button></Link>
                
            </div>
            <div className="offers-right">
                <img src={ExclusiveImage} alt=""></img>
            </div>
        </div>
    )
}
export default Offers;