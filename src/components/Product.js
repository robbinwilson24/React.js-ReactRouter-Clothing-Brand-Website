import React from "react";
import Tshirt1 from '../images/tshirt1.jpg';
import Jeans1 from '../images/jeans1.jpg';
import Trainers1 from '../images/trainers1.jpg';
import Jacket1 from '../images/jacket1.jpg';
import Skirt1 from '../images/skirt1.jpg';
import TShirt2 from '../images/tshirt2.jpg'


import Hangers from "../images/LandingPage/hangers.jpg"
import "../myStyles.css";


let products = [
  { name: "Branded Shirt", price: 25, image: Tshirt1, description: "A comfortable T-shirt, made from sustainably sourced cotton." },
  { name: "Shredded Jeans", price: 45, image: Jeans1, description: "Durable and stylish denim jeans." },
  { name: "RC Trainers", price: 50, image: Trainers1, description: "High quality trainers with cushioned gel insoles. " },
  { name: "Leather Jacket", price: 100, image: Jacket1, description: "A classic black leather jacket, perfect for any occasion." },
  { name: "Denim Skirt", price: 30, image: Skirt1, description: "A trendy denim skirt with a frayed hem." },
  { name: "Crew Neck T-Shirt", price: 15, image: TShirt2, description: "A simple and comfortable crew neck t-shirt made from soft cotton." }];


// define a function for the products that will take props as an argument 
function Product(props) {

    return (
      <div className="product">
        <img className="productImage" src={props.image} alt={props.name} />
        <h3 className="productTitle">{props.name}</h3>
        <p className="productPrice">£{props.price}</p>
        <p className="productDescription">{props.description}</p>
      </div>


  );// export the page 
  
  }
  
  // map the array of products so they each turn into one instance of a product
  // assign mapped array to variable 
  let ProductMap = function () {
    return(
      
    products.map((product, index) => (
      <Product
        key={index}
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description} />
    )))
  }

  // Create a function that will display all products within a div with an id of productSection (for CSS purposes)
  function ProductRender() {
    return(
      <div>

        <div id="productHeadingDiv">
            <img id="productHeadingImage" src={Hangers}/>
            <h1 id="productHeading">Shopping</h1>
        </div>

      <div id="productSection">
        {ProductMap()}
      </div>
      </div>
    )
  }
  
  export default ProductRender;
