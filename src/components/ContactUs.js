import React from "react";
import phones from "../images/Additional/phones.jpg"

function ContactUs() {
    return(
        <div id="AboutUsSection">
            <div id="contactUsDiv">
                <img id="contactUsImage" src={phones}/>
                <h1 id="contactUsHeading">CONTACT US</h1>
            </div>
            
            <div id="contactUsParagraphs">
                <h3>If you have any questions or feedback about our clothing, we would love to hear from you.</h3>
                <p id="contactP1">You can reach out to us by phone, email, or post, and we will get back to you as soon as possible.</p>
            
                <div id="contactDetails">
                    <h3>Our contact details:</h3>
                    <p><span className="contactSpan">Phone: </span>+44 12345678910</p>
                    <p><span className="contactSpan">Email: </span>info@realfamousguitarclothingemail.com.uk</p><br/>
                    <div id="physicalAddress">
                        <p><span className="contactSpan">Address: </span></p>
                        <li>Famous Guitar Ltd.</li>
                        <li>987 Denmark Street</li>
                        <li>London</li>
                        <li>WC2H 9ZZ</li>
                        <li>United Kingdom</li>
                    </div>
                </div><br/>

                <p>Our customer service hours are Monday through Friday, 9am to 6pm GMT. <br/>
                    If you reach out outside of these hours, we will get back to you as soon as possible. <br/>
                    If you have any concerns about your order or need assistance with sizing or fit, our team is here to help. <br/>
                    We are committed to providing our customers with excellent service and making sure 
                    that you are completely satisfied with your purchase.</p>
            </div>
        </div>
    )
}
export default ContactUs;