import React from "react";
import legal from "../images/Additional/legal.jpg"
//Create a component to output some legal info the the main page 
function LegalInfo() {
    return(
        <div id="legalSection">
            <div id="legalDiv">
                <img id="legalImage" src={legal}/>
                <h1 id="legalHeading">Legal Information</h1>
            </div>

            <div id="legalParagraphs">
                <h3>Welcome to the "Famous Guitar Clothing" legal page.</h3>
                <p>Our company is committed to conducting business in accordance with the law and upholding the highest ethical standards.</p><br/>
                <h4>Copyright and Trademark Information:</h4>
                <p>Copyright and Trademark Information:
                    The "Famous Guitar Clothing" name and logo are registered trademarks of our company and are protected by UK and international intellectual property laws. 
                    All content on our website, including text, graphics, logos, images, and software, is the property of "Famous Guitar Clothing" and is protected by UK and international copyright laws. 
                    Reproduction, distribution, or any other use of this material without the written consent of "Famous Guitar Clothing" is strictly prohibited.</p><br/>
                <h4>Privacy Policy</h4>
                <p>"Famous Guitar Clothing" values the privacy of our customers and is committed to protecting their personal information. 
                    We collect, store, and use customer information in accordance with GDPR regulations.</p>
            </div>
        </div>
    )
}
export default LegalInfo;