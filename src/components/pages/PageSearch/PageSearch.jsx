import React from 'react'
import './PageSearch.css';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { Link } from 'react-router-dom';

const PageSearch = () => {
    const [searchParams] = useSearchParams();
    const url = "http://localhost:3004/products?"+ searchParams.toString();
    const { data: items, loading, error } = useFetch(url);
  return (
    <div>
        <h1>Resultados disponiveis:</h1>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
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

export default PageSearch