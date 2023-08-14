import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import AddToCartButton from './AddToCartButton'; // Import the new component

const Product = ({ product }) => {
  const { image, name, slug, price } = product;

  return (
    <div>
      
        <div className="product-card">
        <Link href={`/product/${slug.current}`}>
          <div>
          <img
            src={urlFor(image && image[0])}
            className="product-image"
          />
          </div></Link>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          
          <div className='carto-container'>
          <AddToCartButton product={product} /> {/* Use the new component */}</div>
        </div>
      
    </div>
  );
};

export default Product;
