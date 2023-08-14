import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fields from "../public/bgimages/fields.jpg";
import styles from '../components/OurStyles/Production.module.css';

const Production = () => {
  useEffect(() => {
    AOS.init();
    
  }, []);

  

  return (

    <section style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('/bgimages/fields.jpg')`,
       backgroundSize: 'cover', backgroundPosition:"top center", height:"auto"
    }}
  >
      <div className={styles.production}>
        <div data-aos="fade-right" data-aos-duration="5400" data-aos-delay="300" className={styles.toptext}>
          <p style={{ color: "red", marginBottom: "10px" }}><b>PRODUCTION</b></p>
          <h2>Super Foods Pvt. Ltd. entered in business in 1996 </h2><br />
          <p>
            With quality and efficiency, we have achieved a huge clientele all over the globe. Super Food’s network has expanded to almost 100+ cities officially. Whereas we are still exploring and willing to expand more.
          </p>
        </div>
        <div className={styles.circleContainer}>
          <div data-aos="fade-up" data-aos-duration="5500" data-aos-delay="400" className={styles.circle}>
            <div className={styles.progress}>
              <div className={`${styles.progressFluid} ${styles.progress80}`}></div>
              <div className={styles.progressOverlay}></div>
              <span className={styles.progressText}>500M Ton</span>
            </div>
            <h3 className={styles.circleTitle}>Production Capacity</h3>
          </div>
          <div data-aos="fade-up" data-aos-duration="5500" data-aos-delay="600" className={styles.circle}>
            <div className={styles.progress}>
              <div className={`${styles.progressFluid} ${styles.progress80}`}></div>
              <div className={styles.progressOverlay}></div>
              <span className={styles.progressText}>100+</span>
            </div>
            <h3 className={styles.circleTitle}>Exporting Countries</h3>
          </div>
          <div data-aos="fade-up" data-aos-duration="5500" data-aos-delay="800" className={styles.circle}>
            <div className={styles.progress}>
              <div className={`${styles.progressFluid} ${styles.progress80}`}></div>
              <div className={styles.progressOverlay}></div>
              <span className={styles.progressText}>375</span>
            </div>
            <h3 className={styles.circleTitle}>Existing Clientele</h3>
          </div>
          <div data-aos="fade-up" data-aos-duration="5500" data-aos-delay="1000" className={styles.circle}>
            <div className={styles.progress}>
              <div className={`${styles.progressFluid} ${styles.progress80}`}></div>
              <div className={styles.progressOverlay}></div>
              <span className={styles.progressText}>500 People</span>
            </div>
            <h3 className={styles.circleTitle}>Work Force</h3>
          </div>
        </div>
      </div>



    </section>
  );
};

export default Production;
