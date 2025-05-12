import React from 'react';
import './CartWidget.css';
import { ShoppingCart } from 'lucide-react';


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCart />
      <span className="cart-notification">4</span>
    </div>
  );
};

export default CartWidget;