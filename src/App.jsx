import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';
import CartPage from './components/pages/CartPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
      <nav className='nav'>
          <img src="/images/logo.svg" alt="GiftShoppe Logo" />
          <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/cart">Carrito</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App;