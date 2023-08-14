import React, { useEffect } from 'react';
import styles from '../components/OurStyles/Membership.module.css';
import img1 from '../public/membership1.png';
import img2 from '../public/membership2.png';
import img3 from '../public/membership3.png';
import img4 from '../public/membership4.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Membership = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.certifications}>

<div className={styles.productsheading}>
      <h2>Certifications</h2>
      <p>Demonstrating Our Expertise</p>
    </div>

      <div className={styles.flexContainer}>
        <div data-aos="zoom-out-down" data-aos-duration="1500"  data-aos-delay="0" className={styles.images}>
          <Image src={img1} alt='pic' />
        </div>

        <div data-aos="zoom-out-down" data-aos-duration="1500"  data-aos-delay="600" className={styles.images}>
          <Image src={img2} alt='pic' />
        </div>

        <div data-aos="zoom-out-down" data-aos-duration="1500"  data-aos-delay="1200" className={styles.images}>
          <Image src={img3} alt='pic' />
        </div>

        <div data-aos="zoom-out-down" data-aos-duration="1500"  data-aos-delay="1800" className={styles.images}>
          <Image src={img4} alt='pic' />
        </div>
      </div>
    </section>
  );
};

export default Membership;
