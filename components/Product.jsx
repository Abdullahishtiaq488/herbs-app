import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton'; 

const Product = ({ product }) => {
  const { image, name, slug, price } = product;

  return (
    <div>
      <div className="product-card">
        <Link href={`/product/${slug.current}`} passHref>
          <div>
            <Image
              src={urlFor(image && image[0])}
              alt='no ouc'
              className="product-image"
            />
          </div>
        </Link>
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <div className='carto-container'>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
