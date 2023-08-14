import React, { useState } from 'react';
import Link from 'next/link';
import { client } from '../lib/client';
import Image from 'next/image';
import { Product, FooterBanner, HeroBanner, Truck, Features } from '../components';
import { Certification } from '../components';
import { AboutUs } from '../components';
import { Membership } from '../components';
import { Production } from '../components';
import styles from '../styles/products.module.css';

const Home = ({ products, bannerData }) => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Initialize with 'all'

  const getCategoryProducts = (category) => {
    if (category === 'all') {
      return products; // Return all products
    }
    return products.filter((product) => product.category === category);
  };

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <section className={styles.products}>
        <div id="products" className={`products-heading ${styles.productsHeading}`}>
          <h2>Best Seller Products</h2>
          <p>Here are some of our best products</p>
        </div>
        <div className={styles.navbarcontainer}>
          <div className={styles.navbar}> 
            <p onClick={() => setSelectedCategory('all')}>All</p>
            <p onClick={() => setSelectedCategory('rice')}>Rice</p>
            <p onClick={() => setSelectedCategory('juice')}>Juice</p>
            <p onClick={() => setSelectedCategory('spice')}>Spices</p>
            <p onClick={() => setSelectedCategory('salt')}>Salt</p>
          </div>
        </div>

        {selectedCategory === 'all' || selectedCategory === 'rice' ? (
          <div className={styles.titles}>
            <h2>Rice</h2>
            <div id='rice' className={`product ${styles.product}`}>
              {getCategoryProducts('rice').map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        ) : null}

        {selectedCategory === 'all' || selectedCategory === 'salt' ? (
          <div className={styles.titles}>
            <h2>Salt</h2>
            <div id='salt' className={`product ${styles.product}`}>
              {getCategoryProducts('salt').map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        ) : null}

        {selectedCategory === 'all' || selectedCategory === 'juice' ? (
          <div className={styles.titles}>
            <h2>Juice</h2>
            <div id='juice' className={`product ${styles.product}`}>
              {getCategoryProducts('juice').map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        ) : null}

        {selectedCategory === 'all' || selectedCategory === 'spice' ? (
          <div className={styles.titles}>
            <h2>Spices</h2>
            <div id='spices' className={`product ${styles.product}`}>
              {getCategoryProducts('spice').map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        ) : null}
      </section>

      {/* Other components and sections */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
