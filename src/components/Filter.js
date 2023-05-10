import React, { useState } from 'react';


// function Filter() {

//     const [category, setCategory] = useState('');
//     const [priceRange, setPriceRange] = useState('');

//     const handleCategoryChange = (event) => {
//         const selectedCategory = event.target.value;
//         setCategory(selectedCategory);
//       };
    
//       const handlePriceRangeChange = (event) => {
//         const selectedPriceRange = event.target.value;
//         setPriceRange(selectedPriceRange);
//       };

//     return (
//         <div className="sortMenu">
//             <div>
//                 <label className="categoryLabel">CATEGORY</label>
//                 <select 
//                 className="categorySelect" 
//                 id="categorySelect"
//                 value={category}
//                 onChange={handleCategoryChange} 
//                 >
//                     <option value="">All</option>
//                     <option value="Shoe">Shoes</option>
//                     <option value="Shirt">Shirts</option>
//                     <option value="Short">Shorts</option>
//                     <option value="Skirt">Skirts</option>
//                     <option value="Jeans">Jeans</option>
//                     <option value="Trouser">Trousers</option>
//                     <option value="Jacket">Jackets</option>
//                     <option value="Jumper">Jumpers</option>
//                 </select>
//             </div>

//             <div>
//                 <label className="priceLabel">PRICE RANGE</label>
//                 <select 
//                 className="priceSelect" 
//                 id="priceSelect" 
//                 value={priceRange}
//                 onChange={handlePriceRangeChange}
//                 >
//                     <option value="">All</option>
//                     <option value="£10-£25">£10-£25</option>
//                     <option value="£26-£50">£26-£50</option>
//                     <option value="£51-£75">£51-£75</option>
//                     <option value="£76+">£76+</option>
//                 </select>
//             </div>
//         </div>
//     )
// }

// export default Filter