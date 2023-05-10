import Tshirt1 from '../images/Products/tshirt1.jpg';
import Jeans1 from '../images/Products/jeans1.jpg';
import Trainers1 from '../images/Products/trainers1.jpg';
import Jacket1 from '../images/Products/jacket1.jpg';
import Skirt1 from '../images/Products/skirt1.jpg';
import TShirt2 from '../images/Products/tshirt2.jpg';
import Sneakers1 from '../images/Products/Sneakers1.jpg';
import Polo1 from '../images/Products/Polo1.jpg';
import Shorts1 from '../images/Products/Shorts1.jpg';
import Skirt2 from '../images/Products/Skirt2.jpg';
import Jeans2 from '../images/Products/Jeans2.jpg';
import Trousers1 from '../images/Products/Trousers1.jpg';
import Jacket2 from '../images/Products/jacket2.jpg';
import Jumper1 from '../images/Products/Jumper1.jpg';
import Boots1 from '../images/Products/Boots1.jpg';
import Shorts2 from '../images/Products/Shorts2.jpg';
import Skirt3 from '../images/Products/Skirt3.jpg';
import Trousers2 from '../images/Products/Trousers2.jpg';
import Shorts3 from '../images/Products/Shorts3.jpg';
import Jumper2 from '../images/Products/Jumper2.jpg';
import Pants1 from '../images/Products/Pants1.jpg';
import Hoodie1 from '../images/Products/Hoodie1.jpg';
import Jacket3 from '../images/Products/Jacket3.jpg';
import Sneakers3 from '../images/Products/Sneakers3.jpg';
import Trousers3 from '../images/Products/Trousers3.jpg';
import Jumper3 from '../images/Products/Jumper3.jpg';
import Blazer1 from '../images/Products/Blazer1.jpg';
import Tshirt3 from '../images/Products/Tshirt3.jpg';




let products = [
    { name: "Branded Shirt", price: 25, priceRange: "£10-£25", image: Tshirt1, category: "Shirt", description: "A comfortable T-shirt, made from sustainably sourced cotton." },
    { name: "Shredded Jeans", price: 45, priceRange: "£26-£50", image: Jeans1, category: "Jeans", description: "Durable and stylish denim jeans." },
    { name: "RC Trainers", price: 50, priceRange: "£26-£50", image: Trainers1, category: "Shoes", description: "High quality trainers with cushioned gel insoles. " },
    { name: "Leather Jacket", price: 100, priceRange: "£76+", image: Jacket1, category: "Jacket", description: "A classic black leather jacket, perfect for any occasion." },
    { name: "Denim Skirt", price: 30, priceRange: "£26-£50", image: Skirt1, category: "Skirt", description: "A trendy denim skirt with a frayed hem." },
    { name: "Crew Neck T-Shirt", price: 15, priceRange: "£10-£25", image: TShirt2, category: "Shirt", description: "A simple and comfortable crew neck t-shirt made from soft cotton." },
    { name: "Canvas Sneakers", price: 20, priceRange: "£10-£25", image: Sneakers1, category: "Shoes", description: "Comfortable canvas sneakers with a casual look." },
    { name: "Striped Polo Shirt", price: 35, priceRange: "£26-£50", image: Polo1, category: "Shirt", description: "A stylish striped polo shirt made from breathable cotton." },
    { name: "Cargo Shorts", price: 55, priceRange: "£51-£75", image: Shorts1, category: "Shorts", description: "Durable cargo shorts with plenty of pockets for storage." },
    { name: "Floral Skirt", price: 45, priceRange: "£26-£50", image: Skirt2, category: "Skirt", description: "A beautiful floral midi skirt perfect for spring and summer." },
    { name: "High-Waisted Jeans", price: 60, priceRange: "£51-£75", image: Jeans2, category: "Jeans", description: "Flattering high-waisted jeans with a slim fit." },
    { name: "Tailored Trousers", price: 80, priceRange: "£76+", image: Trousers1, category: "Trousers", description: "Smart and sophisticated tailored trousers for work or formal events." },
    { name: "Biker Jacket", price: 120, priceRange: "£76+", image: Jacket2, category: "Jacket", description: "A stylish biker jacket made from soft leather." },
    { name: "Cable Knit Jumper", price: 50, priceRange: "£26-£50", image: Jumper1, category: "Jumper", description: "A cozy cable knit jumper made from warm wool." },
    { name: "Hiking Boots", price: 90, priceRange: "£76+", image: Boots1, category: "Shoes", description: "Sturdy hiking boots with good traction and ankle support." },
    { name: "Chino Shorts", price: 30, priceRange: "£26-£50", image: Shorts2, category: "Shorts", description: "Casual and comfortable chino shorts for everyday wear." },
    { name: "Striped Skirt", price: 65, priceRange: "£51-£75", image: Skirt3, category: "Skirt", description: "A chic striped maxi skirt with a flowing silhouette." },
    { name: "Slim Fit Chinos", price: 50, priceRange: "£26-£50", image: Trousers2, category: "Trousers", description: "Slim fit chinos that are perfect for a smart casual look." },
    { name: "Ripped Denim Shorts", price: 35, priceRange: "£26-£50", image: Shorts3, category: "Shorts", description: "Trendy ripped denim shorts for a casual summer look." },
    { name: "Striped Jumper", price: 40, priceRange: "£26-£50", image: Jumper2, category: "Jumper", description: "A cozy striped sweater for a casual and stylish look." },
    { name: "Cargo Pants", price: 55, priceRange: "£51-£75", image: Pants1, category: "Trousers", description: "Functional cargo pants with multiple pockets for storage." },
    { name: "Graphic Hoodie", price: 55, priceRange: "£51-£75", image: Hoodie1, category: "Jumper", description: "A trendy hoodie with a bold graphic print." },
    { name: "Vintage Denim Jacket", price: 90, priceRange: "£76+", image: Jacket3, category: "Jacket", description: "A vintage-inspired denim jacket with a worn-in look." },
    { name: "Embroidered Sneakers", price: 40, priceRange: "£26-£50", image: Sneakers3, category: "Shoes", description: "Stylish sneakers with intricate embroidered details." },
    { name: "Wide-Leg Trousers", price: 65, priceRange: "£51-£75", image: Trousers3, category: "Trousers", description: "Fashion-forward wide-leg trousers for a chic and relaxed style." },
    { name: "Block Colour Jumper", price: 70, priceRange: "£51-£75", image: Jumper3, category: "Jumper", description: "A stylish color block sweater with a modern design." },
    { name: "Plaid Blazer", price: 95, priceRange: "£76+", image: Blazer1, category: "Jacket", description: "A sophisticated plaid blazer for a polished and professional look." },
    { name: "Vintage FGC T-Shirt", price: 25, priceRange: "£10-£25", image: Tshirt3, category: "Shirt", description: "A retro-inspired band t-shirt that adds a touch of vintage flair." },
];

export default products;