// pages/aboutus.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from "../styles/aboutus.module.css";
import image1 from "../public/image-coming-soon.png";
import { BsQuote } from 'react-icons/bs';
import {GrDiamond} from 'react-icons/gr';

import Certifications from './certifications';


const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.aboutus}>

    <div className={styles.wrapper}>
       <div className="products-heading">
      <h2>About Us</h2>
      <p>Know About our Team & Culture</p>
    </div>
 


      
      <div data-aos="fade-up" data-aos-duration="1500"   className={styles.section}>
      <div className='products-heading'>
      <h1><GrDiamond size={70} /></h1>
        <div className={styles.challanges}>
        
        <h1 >Our Mission</h1>
        </div>
        
        
       
        </div>

      <div className={styles.heading}>
       
        <div className={styles.textsA}>
        <BsQuote style={{ color: "gray", fontSize: "40px" }} />
        <p>As one of the best Pakistani Leading Basmati companies providing the best quality 
          products and creating joyful moments. Being the best partner through innovations and unprecedented
           business growth. Providing better returns by executing excellence and best-in-class corporate governance</p>
           </div>
      </div>
      </div>

<div data-aos="fade-up" data-aos-duration="1500"   className={styles.section}>

<div className='products-heading'>
      <h1><GrDiamond size={70} /></h1>
        <div className={styles.challanges}>
        
        <h1 >Our Vision</h1>
        </div>
        </div>
     
      <div className={styles.heading}>
       
        <div className={styles.textsA}>
        <BsQuote style={{ color: "gray", fontSize: "40px" }} />
        <p>To preserve and enrich the legacy of Basmati in Pakistan by ensuring the genetic integrity of the seed.
           We encourage farmers to adopt scientific agricultural practices and world-class rice processing technologies
            to emerge as the industry 
          benchmark for product quality and customer service ensuring our presence in every Pakistan Household</p>
          </div>
      </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1500"   className={styles.section}>
      <div className='products-heading'>
      <h1><GrDiamond size={70} /></h1>
        <div className={styles.challanges}>
        
        <h1 >Our Values</h1>
        </div>
        </div>
      <div  className={styles.heading}>
        <div className={styles.textsA}>
        <BsQuote style={{ color: "gray", fontSize: "40px" }} />
        <p>We value quality – which satisfies food lovers all across Pakistan. Our endeavor is to maintain
           the such quality that is evident in the aroma and taste of every rice grain that we offer. We value Innovation
            – to satisfy the needs of consumers with pioneering ideas in taste and variety.
           We value our consumer’s CHOICE – by delivering what the consumer wants and expect from us.</p>

          </div>
      </div>
      </div>
      <div  data-aos="fade-up" data-aos-duration="1500" className={styles.address}>
        <div className={styles.first}>
        <p>Address: 4-km, Main G.T Road Muridke. (39000), Punjab, Pakistan.</p>
        <p>(+92) 3224440319 | 3004003858</p>
        </div>
        <div className={styles.buttons}>
          <button>Get a Quote</button>
        </div>
        </div>

      <div  data-aos="fade-up" data-aos-duration="1500" className={styles.sections}>
        <div className={styles.image}>
          <Image src={image1} alt='image' />
          <div style={{ paddingLeft: "10px" }}>
            <h2>Waqas</h2>
            <p>CEO</p>
          </div>
        </div>

        <div className={styles.texts}>
          <BsQuote style={{ color: "gray", fontSize: "40px" }} />
          <p>Pakistan has long been known for its rich agricultural heritage, and our aim is to showcase the exceptional quality and taste of Pakistani rice to the world. We firmly believe that our country's rice holds immense potential and deserves recognition on a global scale.
To achieve this vision, we are investing in creating state-of-the-art rice fields that embody excellence in every aspect. Our dedicated team of farmers, supported by cutting-edge agricultural technologies, is working diligently to cultivate rice crops that are unmatched in quality, flavor, and nutritional value.
We are proud to be a part of Pakistan's agricultural legacy, and we are committed to upholding sustainable farming practices that respect our environment and ensure the longevity of our rice fields. By promoting responsible water management, soil conservation, and biodiversity preservation, we are playing our part in building a sustainable future for the generations to come.
But our ambitions extend beyond our borders. We aspire to make Pakistani rice a symbol of culinary delight worldwide. 
</p><p>Through strategic partnerships, meticulous quality control, and a focus on customer satisfaction, we are dedicated to bringing the finest Pakistani rice to every corner of the globe
</p>
        </div>

      </div>

      <div data-aos="fade-up" data-aos-duration="1500" className={styles.section}>
      
          <Certifications />
     
          
      </div>
      </div>
      
    </section>
  );
};

export default AboutUs;
