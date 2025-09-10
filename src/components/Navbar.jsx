import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#007bff', color: 'white' }}>
      <h1 style={{ display: 'inline', marginRight: '20px' }}>MyShop</h1>
      <Link to="/" style={{ marginRight: '15px', color: 'white' }}>
        Home
      </Link>
      <Link to="/cart" style={{ color: 'white' }}>
        Cart
      </Link>
    </nav>
  );
}
