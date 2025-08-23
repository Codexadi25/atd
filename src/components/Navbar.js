import React, { useState, useEffect } from 'react';
import "../styles/navbar.css";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/AdityaTechNDevoopsICON.png';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
// import Tooltip from '@mui/material/Tooltip';
import DarkModeToggle from "./DarkModeToggle.js";
// import ServiceComponent from './ServiceComponent.js';

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <div className='navbar'>
         <div className='navContainer'>
            <Link className='logo' to={'/'}>
               <img src={logo} alt="AdityaTech&Devoops"/>
            </Link>
         </div>
            <div class={`navLinks ${isMenuOpen ? 'navLinkActive' : 'navLinkHidden'}`}>
               <CloseIcon className='closeMenueBtn' onClick={toggleMenu} />
               <Link to={'/'} className='navLinkBtn'
                onClick={toggleMenu}>Home</Link>
               <Link to={'/about'} className='navLinkBtn'
                onClick={toggleMenu}>About</Link>
               {/* <Link to='/services'>Services</Link> */}
               {/* <ServiceComponent/> */}
               <div class="productDropdown">
                  <Link to='/products' class="productButton">Products</Link>
                  <div class="products">
                     <Link to='/Acebotv2.3' className='navLinkBtn' onClick={toggleMenu}>Acebot v2.3</Link>
                     <Link to='/Diretov1.4' className='navLinkBtn' onClick={toggleMenu}>Direto v1.4</Link>
                  </div>
               </div>
               <Link to='/blogs' className='navLinkBtn'
                onClick={toggleMenu}>Blogs</Link>
               <Link to='/pricing' className='navLinkBtn'
                onClick={toggleMenu}>Pricings</Link>
               <Link to='/contact' className='navLinkBtn'
                onClick={toggleMenu}>Contact</Link>
               <NavLink to="/faqs" className='navLinkBtn'
                onClick={toggleMenu}>FAQs</NavLink>
            </div>
         <div className='navRight'>
            <DarkModeToggle id="darkToggleBtn"/>
            <div className='menueIcon'>
               <MenuIcon onClick={toggleMenu}/>
            </div>
         </div>
      </div>
   )
}

export default Navbar