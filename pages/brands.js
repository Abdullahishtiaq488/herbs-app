import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiBowlRice } from 'react-icons/bi';
import styles from "../styles/brands.module.css";

const brands = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <section className={styles.brands} >

            <div className="products-heading">
                <h2>Our Brands</h2>
                <p>Our best performing Brands</p>
                <hr style={{ marginLeft: "30%", marginRight: "30%", marginTop: "15px" }} />

            </div>

            <div className={styles.flexbox}>
                <div className={styles.flexitem}>
                    <div data-aos="flip-down" data-aos-duration="1500" style={{
                        background: `url('/bgimages/section-2-1.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center", overflow: "hidden"
                    }} className={styles.itemdata}>
                        <div className={styles.strip}>


                            <h3>Basmati Rice</h3>
                        </div>

                    </div>

                    <div data-aos="flip-down" data-aos-duration="1500"  style={{
                        background: `url('/bgimages/section-2-3.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center", overflow: "hidden"
                    }} className={styles.itemdata}>
                        <div className={styles.strip}>
                            <h3>Lentils</h3>
                        </div>

                    </div>

                </div>

                <div className={styles.flexitem}>

                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" style={{
                        background: `url('/bgimages/section-2-center.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center", overflow: "hidden"
                    }} className={styles.itemdata1}>


                        <h1>SUPER FOODS PVT. LTD.</h1>
                        <p>
                            Super Foods Pvt. Ltd. entered in business in 1996 under the name of Super Rice Mills Pvt.
                            Ltd. which is now well known as Super Foods. Since then it has been treating every milestone achieved as
                            a stepping stone to go past another one. Super Foods Pvt. Ltd. has involved in multiple businesses for 2
                            decades like Processing of Pink Himalayan Natural Salt, Natural Spices, and most of the important Producing
                            of the world's Famous Basmati Rice.
                            Since then it has been treating every milestone achieved as a stepping stone to go past another one.</p>

                    </div>


                </div>

                <div className={styles.flexitem}>
                    <div data-aos="flip-down" data-aos-duration="1500" style={{
                        background: `url('/bgimages/section-2-2.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center", overflow: "hidden"
                    }} className={styles.itemdata}>
                        <div className={styles.strip}>
                            <h3>Bakamal Spices </h3>
                        </div>

                    </div>

                    <div data-aos="flip-down" data-aos-duration="1500" style={{
                        background: `url('/bgimages/section-2-4.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center", overflow: "hidden"
                    }} className={styles.itemdata}>
                        <div className={styles.strip}>
                            <h3>Himalayan Salt</h3>
                        </div>

                    </div>

                </div>


            </div>

        </section>
    )
}

export default brands