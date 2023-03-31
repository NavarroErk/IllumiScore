import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
    
return(
    <footer>
        <div className="footerContainer">
            <div className="footerCopyright">
                {/* &copy;  */}
                2023 - IllumiScore
            </div>
            <ul className="footerList">
                <li><Link className="footerLink" to="/">Contact Us</Link></li>
                <li><Link className="footerLink" to="/">FAQ's</Link></li>
            </ul>


        </div>
    </footer>
  )
}
export default Footer;