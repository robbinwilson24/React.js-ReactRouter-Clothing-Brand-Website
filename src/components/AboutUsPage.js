import React from "react";
import keys from "../images/LandingPage/keys.jpg"

function AboutUs() {
    return(
        <div id="AboutUsSection">
            <div id="aboutUsDiv">
                <img id="aboutUsImage" src={keys}/>
                <h1 id="aboutUsHeading">ABOUT US</h1>
            </div>
            
            <div id="aboutUsParagraphs">
                <p>Welcome to Famous Guitar Clothing, a fashion brand that combines our love of music with stylish, high-quality clothing for men and women. We believe that fashion should be an expression of your individuality, 
                    and our collection is designed to help you stand out from the crowd. We take great pride in our attention to detail, and every piece of clothing is carefully crafted to ensure that you look and feel your best.</p><br/>
                <p>At Famous Guitar Clothing, we understand the importance of ethical and sustainable business practices. That's why we take great care to ensure that all of our products are made using eco-friendly materials and ethical manufacturing processes. 
                    From our suppliers to our production facilities, we work closely with everyone involved in the creation of our clothing to ensure that we are doing our part to protect the environment and support fair labor practices.</p><br/>
                <p>As music lovers, we are inspired by the energy and creativity of musicians and their fans. Our designs are inspired by iconic guitarists and the spirit of rock and roll. From t-shirts and hoodies to jeans and jackets, 
                    our collection is designed to capture the essence of rock and roll and help you make a statement wherever you go.</p><br/>
                <p>At Famous Guitar Clothing, we believe that fashion and music go hand in hand. We are committed to providing our customers with high-quality, stylish clothing that is as unique as they are. 
                    Thank you for choosing Famous Guitar Clothing, and we hope that you enjoy our collection as much as we do.</p><br/>
            </div>
        </div>
    )
}
export default AboutUs;