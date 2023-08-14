import React from 'react';
import Head from 'next/head';
import TopBelt from './TopBelt';
import Navbar from './Navbar';
import Footer from './Footer';




const Layout = ({ children }) => {

  

  return (
    
    <div style={{
      backgroundImage:`url("/bgimages/white6.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
    }}
    
    className="layout">
      <Head>
        <title>Herbal Giza Ltd</title>
      </Head>
      
      <TopBelt />
      <div style={{position:"sticky", top:"0px", zIndex:"20", backgroundColor:"white"}}>
        <Navbar />
        </div>
    
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout