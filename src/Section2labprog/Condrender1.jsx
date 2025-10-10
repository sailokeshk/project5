import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Cart component: displays sample cart items
const ShoppingCart = () => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      marginTop: '20px',
      width: '300px',
      margin: 'auto',
      borderRadius: '8px',
    }}>
      <h3>Your Shopping Cart</h3>
      <ul>
        <li>🧢 Hat - $15</li>
        <li>👕 T-Shirt - $20</li>
        <li>👟 Sneakers - $50</li>
      </ul>
    </div>
  );
};

// Main App component
export const MaincartComp = () => {
  // State to track if cart is visible
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Shopping Cart Example</h1>

      {/* Toggle button */}
      <button onClick={toggleCart}>
        {showCart ? 'Hide Cart' : 'Show Cart'}
      </button>

      {/* Conditional rendering of the cart */}
      {showCart && <ShoppingCart />}
    </div>
  );
};


