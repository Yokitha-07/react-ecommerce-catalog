import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.title} - ${item.price} 
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
