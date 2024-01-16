import React from 'react'
import { useState } from 'react'
import './NavigationBar.css'
import logo from '../../Assets/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div>

      <div className='nav-bar-container'>
        <Link to="/">
          <div className='logo-part'>
            <img className='logo' src={logo}></img>
          </div>
        </Link>

        <ul className={isMobile ? "pages-mobile" : 'pages'}

          onClick={() => setIsMobile(false)}  >
          <Link to="/"><li className='navbar-item'>Hotels & Homes</li> </Link>
          <Link to="/"> <li className='navbar-item'>Flights</li> </Link>
          <Link to="/"><li className='navbar-item'>Airport transfer</li> </Link>
          <Link to="/">  <li className='navbar-item'>Coupons & Deals</li> </Link>
          <Link to="/">   <li className='navbar-item'>Apartments</li> </Link>

        </ul>
        <button className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes></FaTimes> : <CiMenuBurger></CiMenuBurger>}
        </button>
      </div>

    </div>
  )
}

export default NavigationBar