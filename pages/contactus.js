// pages/aboutus.js
import React from 'react';
import Image from 'next/image';
import tasveer from "../public/tasveer.jpg";
import styles from "../styles/contactus.module.css";

const ContactUs = () => {
  return (
    <section className={styles.contactus}>

<div className="products-heading">
      <h2>Contact Us</h2>
      <p>Send us an Email, Now!</p>
    </div>

      <div className={styles.section}>
        
        
          <Image src={ tasveer} alt="sections2" />
        

        <div className={styles.form}>

          <form>

          <div className={styles.names}>
            <div>
            <p > Name:</p> <input type='text'></input>
            </div>
            <div>
            <p >Subject:</p> <input  type='text'></input> 
            </div>
             
          </div>

            <div className={styles.names}>
            <div>
            <p > Email:</p> <input type='text'></input>
            </div>
            <div>
            <p style={{marginBottom:"5px"}} >Contact Details:</p> <input type='text'></input> 
            </div>

          </div>

            

            

            <p style={{marginBottom:"5px"}}>Company Name: </p>
            <input type='text'></input>
            <p className={styles.pl}>Message:</p>

            <textarea style={{width:"99%", marginTop:"15px"}} id="message" name="message" rows="6" ></textarea>

            </form>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
