import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import products from './productArray';

import Hangers from "../images/LandingPage/hangers.jpg"
import "../myStyles.css";



function Filter({ onFilterChange }) {
  const [priceSelect, setPriceSelect] = useState("");
  const [categorySelect, setCategorySelect] = useState("");

  function updateCategory(event) {
    let category = event.target.value
    setCategorySelect(category);
    onFilterChange(category, priceSelect);
  }

  function updatePrice(event) {
    let price = (event.target.value);
    setPriceSelect(price);
    onFilterChange(categorySelect, price);
  }

  return (
    <div className="sortMenu">
      <div>
        <label className="categoryLabel">CATEGORY</label>
        <select className="categorySelect" id="categorySelect" value={categorySelect} onChange={updateCategory}>
          <option value="">All</option>
          <option value="Shoes">Shoes</option>
          <option value="Shirt">Shirts</option>
          <option value="Shorts">Shorts</option>
          <option value="Skirt">Skirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Trousers">Trousers</option>
          <option value="Jacket">Jackets</option>
          <option value="Jumper">Jumpers</option>
        </select>
      </div>

      <div>
        <label className="priceLabel">PRICE RANGE</label>
        <select className="priceSelect" id="priceSelect" value={priceSelect} onChange={updatePrice}>
          <option value="">All</option>
          <option value="£10-£25">£10-£25</option>
          <option value="£26-£50">£26-£50</option>
          <option value="£51-£75">£51-£75</option>
          <option value="£76+">£76+</option>
        </select>
      </div>
    </div>
  )
}


function Product(props) {
  return (
    <div className="product">
      <LazyLoad debounce={500} offsetVertical={500}>
        <img className="productImage" src={props.image} alt={props.name} />
      </LazyLoad>
      <h3 className="productTitle">{props.name}</h3>
      <p className="productPrice">£{props.price}</p>
      <p className="productDescription">{props.description}</p>
      <button className="addToCartButton">Add to Cart</button>
    </div>
  );
}


function ProductMap({ selectedCategory, selectedPrice }) {

  let filteredProducts = products.filter((product) => {

    if (selectedPrice === "" && selectedCategory === "") {
      return true;
    }

    let categoryMatch = selectedCategory === "" || product.category === selectedCategory;
    let priceMatch = selectedPrice === "" || product.priceRange === selectedPrice;

    return categoryMatch && priceMatch;
  });

  if (filteredProducts.length === 0) {
    return <div className='noItemsFound'>
      <h1>	¯\(O_o)/¯</h1>
      <h3>Oh dear...</h3>
      <h6>It looks like there are no items matching your filter criteria</h6>
    </div>
  }

  return (
    filteredProducts.map((product, index) => (
      <Product
        key={index}
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description}
      />
    ))
  )


}


function ProductRender() {
  let [selectedCategory, setSelectedCategory] = useState('');
  let [selectedPrice, setSelectedPrice] = useState('');

  function handleFilterChange(category, price) {
    setSelectedCategory(category);
    setSelectedPrice(price)
  }

  return (
    <div>

      <div id="productHeadingDiv">
        <img id="productHeadingImage" src={Hangers} alt="background of hangers on a rail" />
        <h1 id="productHeading">Shopping</h1>
      </div>

      <Filter onFilterChange={handleFilterChange} />

      <div className="productSection">
        <ProductMap selectedCategory={selectedCategory} selectedPrice={selectedPrice} />
      </div>


    </div>
  )
}

export default ProductRender;
