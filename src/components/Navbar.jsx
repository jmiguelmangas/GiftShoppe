
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import "./styles/Navbar.css"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? 'navbar open' : 'navbar'}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={toggleMenu}>
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <Link to="/" onClick={() => { if (!isActiveLink('/')) toggleMenu(); }}>Inicio</Link>
            </li>
            <li>
              <Link to="/products" onClick={() => { if (!isActiveLink('/products')) toggleMenu(); }}>Productos</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => { if (!isActiveLink('/cart')) toggleMenu(); }}>Carrito</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;