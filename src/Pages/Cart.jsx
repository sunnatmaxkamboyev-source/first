import React from "react";
import { Button } from "antd";
import "../styles/cart.css";

const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h2 className="empty-cart">🛒 Savat bo‘sh</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Mening savatim</h2>

      <div className="cart-list">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>Narxi: ${item.price}</p>
              <p>Miqdori: {item.quantity} ta</p>
              <p className="item-total">
                Jami: ${item.price * item.quantity}
              </p>
            </div>

            <Button danger onClick={() => removeItem(item.id)}>
              O‘chirish
            </Button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Savat jami</h3>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
