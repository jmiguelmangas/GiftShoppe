import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';
import CartPage from './components/pages/CartPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <section>
      
      <Router>
      <Navbar />  
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      </div>
    </Router>
    </section>
    
  )
}

export default App;