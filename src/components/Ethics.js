import React from "react";
import turbines from "../images/Additional/turbines.jpg"

function Ethics() {
    return(
        <div id="ethicsSection">
            <div id="ethicsDiv">
                <img id="ethicsImage" src={turbines}/>
                <h1 id="ethicsHeading">Our Ethical Commitments</h1>
            </div>
            
            <div id="ethicsParagraphs">
                <p>At Famous Guitar Clothing, we are committed to creating clothing that not only looks good, but is ethically and sustainably produced. 
                    Our mission is to ensure that every step of our production process meets high ethical standards, 
                    from sourcing materials to manufacturing and shipping our products.<br/><br/>

                    One of our key values is to protect the environment by using sustainable materials and production methods. 
                    We understand that fashion has a significant impact on the planet, and we believe that it is our responsibility to minimize that impact as much as possible. 
                    That's why we use eco-friendly materials like organic cotton, recycled polyester, 
                    and other sustainable fabrics, and work with manufacturers who share our commitment to environmental sustainability.<br/><br/>

                    We also believe that ethical production practices are essential to creating high-quality clothing that our customers can feel good about wearing. 
                    We work with suppliers and manufacturers who adhere to fair labor practices, ensuring that every person involved in the production of our clothing is treated with respect and dignity. 
                    We believe that everyone in our supply chain should receive fair wages, safe working conditions, and opportunities for professional growth.<br/><br/>

                    In addition to our commitment to ethical and sustainable practices, we are also passionate about music and supporting musicians. 
                    We work closely with musicians to create unique designs inspired by the energy and creativity of rock and roll. 
                    We also donate a portion of our profits to organizations that support emerging musicians, helping to foster the next generation of talent.<br/><br/>

                    At Famous Guitar Clothing, we are committed to creating clothing that is not only stylish, but also ethical and sustainable. 
                    We believe that fashion can be a force for positive change in the world, and we are proud to be part of a growing movement of socially responsible fashion brands.
                    
                    
                    </p>
            </div>
        </div>
    )
}
export default Ethics;