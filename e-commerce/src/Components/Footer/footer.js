import React from "react";
import "./footer.css"
import footer from "../Assets/logo.png"
import instagram from "../Assets/instagram.jfif"
import pinterest from "../Assets/pintester.jfif"
import whatsapp from "../Assets/whatsapp.jfif"


const Footer = ()=>{
    return(
        <div className="footer">
         <div className="footer-logo">
<img src={footer} alt=""></img>
<p>SHOPPER</p>
         </div>
         <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img width="60"src={instagram}alt=""></img>
            </div>
            <div className="footer-icons-container">
                <img width="60"src={pinterest} alt=""></img>
            </div>
            <div className="footer-icons-container">
                <img width="60"src={whatsapp} alt=""></img>
            </div>
         </div>
         <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
         </div>
        </div>
    )
}
export default Footer;