import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/productCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); 
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <div className="quantity-control">
        <button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}>-</button>
        <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value) || 1)} />
        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
      </div>

      <button className="add-btn" onClick={handleAddToCart}>Savatga qo‘shish</button>
    </div>
  );
}

export default ProductCard;
