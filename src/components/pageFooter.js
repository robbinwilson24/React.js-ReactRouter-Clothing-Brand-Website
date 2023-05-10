import React from "react";
import { Link } from "react-router-dom";

function PageFooter() {
    return(
        <footer id="footer">
            <nav id="footer-nav">
                <ul id="footer-list">
                    <li><Link className="footer-list-item" to="/about">About Us</Link></li>
                    <li><Link className="footer-list-item" to="/contact">Contact Us</Link></li>
                    <li><Link className="footer-list-item" to="/ethics">Ethics & Sustainability</Link></li>
                    <li><Link className="footer-list-item" to="/legal" >Legal Stuff</Link></li>
                    <li id="footerC">© FGC 2023</li>
                </ul>
            </nav>
        </footer>
    )
}

export default PageFooter;
