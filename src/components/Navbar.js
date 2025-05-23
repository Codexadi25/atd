import React from 'react';
import "../styles/navbar.css";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/AdityaTechNDevoopsICON.png';
import Tooltip from '@mui/material/Tooltip';
import DarkModeToggle from "./DarkModeToggle.js";
import ServiceComponent from './ServiceComponent.js';

function Navbar() {

   return (
      <div className='navbar'>
         <div className='navContainer'>
            <Link className='logo' to={'/'}>
               <img src={logo} alt="AdityaTech&Devoops"/>
            </Link>
         </div>
         <div class="navLinks">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to='/services'>Services</Link>
            {/* <ServiceComponent/> */}
            <div class="productDropdown">
               <Link to='/products' class="productButton">Products</Link>
               <div class="products">
                  <Link to='/Acebotv2.3'>Acebot v2.3</Link>
                  <Link to='/Diretov1.4'>Direto v1.4</Link>
               </div>
            </div>
            <Link to='/pricing'>Pricings</Link>
            <Link to='/contact'>Contact</Link>
            <NavLink to="/faqs">FAQs</NavLink>
            <DarkModeToggle />
         </div>
      </div>
   )
}

export default Navbar