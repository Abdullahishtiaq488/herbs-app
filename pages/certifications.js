import React from 'react';
import Image from 'next/image';
import styles from "../styles/certifications.module.css";
import { BsQuote } from 'react-icons/bs';
import {GrDiamond} from 'react-icons/gr';
import certificate1 from "../public/certificate1.jpg";
import certificate2 from "../public/certificate2.jpg";
import certificate3 from "../public/certificate3.jpg";
import certificate4 from "../public/certificate4.jpg";
import certificate5 from "../public/certificate5.jpg";
import certificate6 from "../public/certificate6.jpg";
import certificate7 from "../public/certificate7.jpg";
import certificate8 from "../public/certificate8.jpg";

const Certifications = () => {
    return (
        <section className={styles.certifications}>
            
            <div className='products-heading'>
      <h1><GrDiamond size={70} /></h1>
        <div className={styles.challanges}>
        
        <h1 >Our Certificates</h1>
        </div>
        
        
       
        </div>
           
            <div className={styles.certificates}>
                <div className={styles.flexContainer}>

                    <div className={styles.images}>
                    <Image src={certificate1}  alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate2}  alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate3} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate4} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate5} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate6} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate7} alt="pic" />
                    </div>

                    <div className={styles.images}>
                    <Image src={certificate8} alt="pic" />
                    </div>

                </div>
            </div>
            </section>
    );
};

export default Certifications;
