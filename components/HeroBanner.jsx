import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bag1 from "../public/bag1.png";
import bag2 from "../public/bag2.png";
import bag3 from "../public/bag3.png";
import masala1 from "../public/masala1.png";
import masala2 from "../public/masala2.png";
import masala3 from "../public/masala3.png";
import masala4 from "../public/masala4.png";



import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const shouldAnimate = activeSlide === 0; // Check if it's the fourth slide
  const shouldAnimate2 = activeSlide === 1;
  const shouldAnimate3 = activeSlide === 2;
  return (


    <Carousel className='react-carousel'  autoPlay={true}
      onChange={handleSlideChange}
      interval={5000} transitionTime={1300} showThumbs={false} showStatus={false} infiniteLoop={true}>

      <div style={{

        padding: '100px 40px',
        backgroundImage: `url("/bgimages/page1.png")`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        position: 'relative',
        height: '600px',
        lineHeight: '0.9',
        width: '100%',
        textAlign: 'left',
        color: 'white',
      }}

        className="hero-banner-container">
        <div className={`texta ${shouldAnimate ? 'text-animation' : ''}`}>
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
          <div className={`hero-banner-images ${shouldAnimate ? 'animation' : ''}`}>
            <Image src={masala1} layout="fill" objectFit="cover" alt="headphones" />
          </div>
          <div className={`hero-banner-images2 ${shouldAnimate ? 'animation' : ''}`}>
            <Image src={masala2} layout="fill" objectFit="cover" alt="rice" />
          </div>
          <div className={`hero-banner-images3 ${shouldAnimate ? 'animation' : ''}`}>
            <Image src={masala3} layout="fill" objectFit="cover" alt="rice" />
          </div>
          <div className={`hero-banner-images4 ${shouldAnimate ? 'animation' : ''}`}>
            <Image src={masala4} layout="fill" objectFit="cover" alt="rice" />
          </div>


          <div>
            

          </div>
        </div>
      </div>
      <div style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.041), 
        rgba(0, 0, 0, 0.041)), url("/bgimages/rice1.png")`,
        backgroundPosition: 'center',
        padding: '100px 40px',
        height: '600px',
        backgroundSize: 'cover',
        textAlign: 'left',
        color: '#fff',
        position: 'relative',
        padding: '40px',
        lineHeight: '0.9',
        width: '100%',
      }}

        className='image2'>
        <div className={`texta2 ${shouldAnimate2 ? 'text-animation' : ''}`}>
          <p className="beats-solo">{heroBanner.smallText}</p>

          <h1>{heroBanner.largeText1}</h1>
          <h3 >{heroBanner.midText}</h3>


          <div className={`hero-banner-image ${shouldAnimate2 ? 'animation' : ''}`}>
            <Image src={bag1} layout="fill" objectFit="cover" alt="headphones" />
          </div>
          <div className={`hero-banner-image2 ${shouldAnimate2 ? 'animation' : ''}`}>
            <Image src={bag2} layout="fill" objectFit="cover" alt="rice" />
          </div>
          <div className={`hero-banner-image3 ${shouldAnimate2 ? 'animation' : ''}`}>
            <Image src={bag3} layout="fill" objectFit="cover" alt="rice" />
          </div>

          <div>
            

          </div>
        </div>

      </div>

      <div style={{

        background: `linear-gradient(rgba(0, 0, 0, 0.141), 
        rgba(0, 0, 0, 0.141)), url("/bgimages/salt1.png")`,
        backgroundPosition: 'center',
        padding: '100px 40px',
        height: '600px',
        backgroundSize: 'cover',
        textAlign: 'left',
        color: '#fff',
        position: 'relative',
        padding: '40px',
        lineHeight: '0.9',
        width: '100%',
      }}
      
      className='image3'>

        <div className={`texta3 ${shouldAnimate3 ? 'text-animation' : ''}`}>

          <h1>New</h1>
          <h3>Himalayan Salt</h3>
          <p className="beats-solo">Discount Up to 30% OFF </p>

          <br />
          {/* <div className={`hero-banner-image ${shouldAnimate3 ? 'animation' : ''}`}>
            <Image src={bag1} layout="fill" objectFit="cover" alt="headphones" />
          </div>
          <div className={`hero-banner-image2 ${shouldAnimate3 ? 'animation' : ''}`}>
            <Image src={bag2} layout="fill" objectFit="cover" alt="rice" />
          </div>
          <div className={`hero-banner-image3 ${shouldAnimate3 ? 'animation' : ''}`}>
            <Image src={bag3} layout="fill" objectFit="cover" alt="rice" />
          </div> */}

          <div>
            
            {/* <div className="desc">
              <h5 className='colors'>Description</h5>
              <p>{heroBanner.desc}</p>
            </div> */}
          </div>
        </div>

      </div>


    </Carousel>
    
  )
}

export default HeroBanner