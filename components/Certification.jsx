import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../components/OurStyles/Certification.module.css';
import Image from 'next/image';
import pic1 from '../public/certification1.png';
import pic2 from '../public/certification2.png';
import pic3 from '../public/certification3.png';
import pic4 from '../public/certification4.png';

const Certification = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.certification}>

      <div className={styles.productsheading}>
      <h2>Our Membership</h2>
      <p>Here are some of our Members</p>
    </div>

      <div className={styles.flexContainer}>
        <div data-aos="fade-down" data-aos-duration="1500"  data-aos-delay="0" className={styles.images}>
          <Image src={pic1} alt='pic' />
        </div>

        <div data-aos="fade-down" data-aos-duration="1500"  data-aos-delay="600" className={styles.images}>
          <Image src={pic2} alt='pic' />
        </div>

        <div data-aos="fade-down" data-aos-duration="1500"  data-aos-delay="1200" className={styles.images}>
          <Image src={pic3} alt='pic' />
        </div>

        <div data-aos="fade-down" data-aos-duration="1500"  data-aos-delay="1800" className={styles.images}>
          <Image src={pic4} alt='pic' />
        </div>
      </div>
    </section>
  );
};

export default Certification;
