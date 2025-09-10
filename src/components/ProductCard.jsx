import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ height: '150px', objectFit: 'contain' }}
      />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
