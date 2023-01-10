import React from 'react'
import './PageProduct.css';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

const PageProduct = () => {
    const { id } = useParams();

    const url = `http://localhost:3004/products/${id}`;
    const { data: product, loading, error } = useFetch(url);

  return (
    <div>
        <h1>Detalhes do produto</h1>
        <p>ID do produto: {id}</p>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div className='product'>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <Link to={`/product/${product.id}/info`}>Informações:</Link>
            </div>
        )}
        
    </div>
    
  )
}

export default PageProduct
