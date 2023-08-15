import React from 'react';
import Link from 'next/link';
import { Product } from '../components';
import styles from "../styles/products.module.css";
import { client } from '../lib/client';

const Products = ({ products }) => {
  const getCategoryProducts = (category) => {
    return products.filter(product => product.category === category);
  };

  return (
    <section className={styles.products}>

    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>Here are some of our best products</p>
    </div>
    <div className={styles.navbarcontainer}>

      <div className={styles.navbar}> 
      <Link href="#rice" passHref>
          <p >Rice</p>
        </Link>
        <Link href="#juice" passHref>
          <p >Juice</p>
        </Link>
        <Link href="#spices" passHref>
          <p >Spices</p>
        </Link>
        <Link href="#salt" passHref>
          <p >Salt</p>
        </Link>  
      </div>
    </div>

    <div className={styles.titles}>
  <h2>Rice</h2>


      <div id='rice' className='product'>
        {getCategoryProducts('rice').map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      
      </div>

<div className={styles.titles}>
  <h2>Salt</h2>

      <div id='salt' className='product'>
        {getCategoryProducts('salt').map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      </div>
      

      <div className={styles.titles}>
  <h2>Juice</h2>

      <div id='juice' className='product'>
        {getCategoryProducts('juice').map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      </div>

      <div className={styles.titles}>
  <h2>Spices</h2>

      <div id='spices' className='product'>
        {getCategoryProducts('spice').map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Products;
