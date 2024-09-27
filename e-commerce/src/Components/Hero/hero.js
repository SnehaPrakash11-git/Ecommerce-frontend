import React from "react";
import trendy from "../Assets/trendy3.png"
import "../Hero/hero.css"
import { Button } from "@mui/material";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Hero = ()=>{
    return(
        <div className="hero">
           <div className="new-arrivals">
            <h2>New Arrivals Only</h2>   
           </div>
           <div  className="new"><h1>new</h1></div>
           <div  className="new"><h1>collections</h1></div>
           <div  className="new"><h1>for everyone</h1></div>  
           <div>
            <Link to="./shop">
            <Button style={{borderRadius:"40px",height:"50px",background:"#381312",color:"white",marginTop:"70px",marginLeft:"15rem"}} variant="contained"><strong>Latest Collections</strong>
            <RightOutlined/>
            </Button>  </Link>
           
            <div className="trendy-img">
                <img style={{ marginRight:"276px"}}src={trendy}></img>
            </div>
           </div>
                </div>
    )

}
export default Hero;