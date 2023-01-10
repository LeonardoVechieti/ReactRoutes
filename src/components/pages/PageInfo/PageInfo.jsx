import React from 'react'
import './PageInfo.css';
import { useParams } from 'react-router-dom';

const PageInfo = () => {
    const { id } = useParams();
  return (
    <div>
        <h1>Informações do produto</h1>
        <p>ID: {id}</p>
    </div>
  )
}

export default PageInfo