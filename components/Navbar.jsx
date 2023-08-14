import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu  } from 'react-icons/ai';
import Logo  from "../public/SF.png";
import { Cart } from './';
import Image from 'next/image';
import { useStateContext} from '../context/StateContext';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setTimeout(() => {
      setMenuOpen(!isMenuOpen);
    }, 300);
  };

  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar-container" ref={navbarRef}>
      <div className='logos'>
        
      </div>

      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
      <Link href="/">
          <p className={router.pathname === '/' ? 'active' : ''}>Home</p>
        </Link>
        {/* <Link href="/products">
          <p className={router.pathname === '/products' ? 'active' : ''}>ShopNow</p>
        </Link> */}
        <Link href="/aboutus">
          <p className={router.pathname === '/aboutus' ? 'active' : ''}>About Us</p>
        </Link>
        <Link href="/brands">
          <p className={router.pathname === '/brands' ? 'active' : ''}>Our Brands</p>
        </Link>
        <Link href="/contactus">
          <p className={router.pathname === '/contactus' ? 'active' : ''}>Contact Us</p>
        </Link>
      </div>
<div className='jewel'>

<Link href={`/#products`}>
              <button className='btn1' type="button">Shop Now</button>
            </Link>
            
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
    
            

      <button type="button" className="menu-icon" onClick={toggleMenu}>
        <AiOutlineMenu size={21}/>
      </button>
      </div>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;