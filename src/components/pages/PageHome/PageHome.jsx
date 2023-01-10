import React from 'react'
import './PageHome.css';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';


const PageHome = () => {
  //global url
  const url = 'http://localhost:3004/products';
  
  const { data: items, loading, error } = useFetch(url);


  return (
    <div>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <ul className='products'>
        {/* Map que exibe os produtos */}
        {items && items.map((product) => (
          <li key={product.id}>
            <h2>{product.name} </h2>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default PageHome