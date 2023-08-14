import React from 'react';
import styles from "../components/OurStyles/Truck.module.css";
import truck from "../public/Truck.png";
import cloud from "../public/cloud.png";
import Image from 'next/image';

const Truck = () => {
  return (
    <section style={{
      background: `url('/bgimages/truck-section.png')`,
       backgroundSize: 'cover',
      backgroundPosition:"center", height:"1050px", width:"100%", position: "relative" , overflow:"hidden"
    }}
     >
      <div className={styles.productsheading}>
        <h1>Journey to Flavors </h1>
        <p>Exploring the Road of Authentic Rice Delights</p>
      </div>

    <div className={styles.cloud1}> 
        <div className={styles.cloudWrapper} >
      <Image src={cloud} alt="truck"  />
      </div>
      </div>

      <div className={styles.cloud2}> 
        <div className={styles.cloudWrapper} >
      <Image src={cloud} alt="truck"  />
      </div>
      </div>

      <div className={styles.cloud3}> 
        <div className={styles.cloudWrapper} >
      <Image src={cloud} alt="truck"  />
      </div>
      </div>
      

      <div className={styles.truck}>
        <div className={styles.imageWrapper}>
          <Image src={truck} alt="truck" width={2000} height={450} />
        </div>
      </div>

    </section>
  );
};

export default Truck;
