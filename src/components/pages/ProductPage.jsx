import { useEffect, useState } from 'react';
import "./styles/ProductPage.css"
const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>{
          setProducts(json)
        })
      
  
  }, []);

  return (
    <div className="product-page">
      <h1 className='title-page'>Productos</h1>
      <div className="product-list product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} className='product-image'/>
            <h3 className='product-title'>{product.title}</h3>
            <p className='product-cat'>{product.category}</p>
            <p className='product-desc'>{product.description}</p>
            <p className='product-price'>{product.price} €</p>
            <form action="submit" className='form-buy'>
            <label htmlFor="units" className='label-units'>Units</label>
            <input type="number" className='units' id="units" name="units" min="1" max="10" placeholder='1'/>
            <button type='submit' className='css-button-sliding-to-left--sky'>Buy</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
