import "./styles/HomePage.css"
import {Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="cta">
        <img src="/images/cta-image.jpg" alt="CTA Image" /> 
        <section className="content">
          <h2>Encuentra el regalo perfecto para cualquier ocasión</h2>
          <button>
            <Link to="/products">Explorar productos</Link>
          </button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
