import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import Logo from "../public/SF.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="column">
          <h4>About Us</h4>
          <hr />
          <div className='log'>
            {/* <Image src={ Logo } width={110} height={100} alt="pic" /> */}
          </div>
          <p>Discover the essence of natural wellness at Herbal Giza. Our curated collection of herbal remedies
             and products is a testament to holistic health. Embrace the power of nature for a balanced and vibrant life</p>
        </div>
        <div className="column">
          <h4>Quick Links</h4>
          <hr />

          <p>Home</p>
          <p>About Us</p>
          <p>Our Brands</p>
          <p>Who we are?</p>
          <p>Contact us</p>

        </div>
        <div className="column">
          <h4>Facebook</h4>
          <hr />
          <p>Connect with us on Facebook</p>
        </div>
        <div className="column">
          <h4>Contact Us</h4>
          <hr />
          <p><b>Contact us or WhatsApp:</b><br />
            (+92) 3000000000 | 3004000000</p>

          <p><b>Monday-Saturday</b>: 9am to 5pm <br />
            <b>Sunday</b>: Closed</p>

          <p><b>Address</b>: 15 B1 Township, Lahore, Punjab, Pakistan.</p>

        </div>
      </div>

      {/* Strip */}

      <div className="strip">
        <div>All Rights Reserved © Copyright 2021 - Herbal Giza

          <p className='jack' > <AiFillInstagram style={{ float: "right", marginLeft: "10px" }} />
            <AiOutlineTwitter style={{ float: "right", marginLeft: "10px" }} />
            <AiFillFacebook style={{ float: "right", marginLeft: "10px" }} />
            <AiFillYoutube style={{ float: "right", marginLeft: "10px" }} />
            <AiFillLinkedin style={{ float: "right", marginLeft: "10px" }} /></p>  </div>



      </div>
    </>
  );
}

export default Footer;
