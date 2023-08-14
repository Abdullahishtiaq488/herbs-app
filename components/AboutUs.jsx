
import styles from '../components/OurStyles/AboutUs.module.css';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsCheck2Circle} from 'react-icons/bs';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    
  }, []);

  return (
    <section >
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.441), 
          rgba(0, 0, 0, 0.441)), url("/bgimages/tankers.jpg")`,
          backgroundPosition: 'center',
          
          backgroundSize: 'cover',
        
          
          position: 'relative',
          overflow: "hidden"
        }}>
        
        
        <div className={styles.toptext}>
<div data-aos="fade-in" data-aos-duration="1700" data-aos-delay="200">
          <h2>Why Choose us</h2><br />
          <p>Super Foods Pvt. Ltd. has started in 1996.
            We have formulated our thoughts with the passage of time.
            Gain expertise in fulfillment of market demands, created huge man force to meet customers
            requirements and quality of our products</p>
            </div><br />

          <div data-aos="fade-left" data-aos-duration="6700" data-aos-delay="300" className={styles.main}>

            <div className={styles.boxes}>
              <div className={styles.icons}>
                <BsCheck2Circle style={{ color: "white", fontSize: "60px" }} />
              </div>


              <div  className={styles.text}>
                <h2> SUPERIOR QUALITY</h2>
                <p>With a positive mindset and huge manpower, we can maintain quality with efficiency & perfection.
                  Our quality control department is well equipped with the latest technology to provide extra vigilant
                  quality assurance services to our customers.</p></div>
            </div></div>

          <div data-aos="fade-left" data-aos-duration="6700" data-aos-delay="600" className={styles.main}>

            <div className={styles.boxes}>
              <div className={styles.icons}><BsCheck2Circle style={{ color: "white", fontSize: "60px" }} /></div>


              <div className={styles.text} >
                <h2> EFFICIENT ORDER PROCESSING </h2>
                <p>The strength of our team is timely fulfillment.
                  This key factor makes us prevailed over others.
                  We have in house team to make sure all deliveries are made at right time to the right place.</p></div></div>
          </div>

          <div data-aos="fade-left" data-aos-duration="6700" data-aos-delay="900" className={styles.main}>

            <div className={styles.boxes}>
              <div className={styles.icons}>
                <BsCheck2Circle style={{ color: "white", fontSize: "60px" }} /></div>


              <div className={styles.text}>

                <h2>MARKET COMPETITIVE PRICES</h2>
                <p>Super Food Pvt Ltd. is moreover focused on customer satisfaction. We are passionate to work for a
                  long time with its loyal customers by providing efficient services and market competitive prices.</p></div></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs