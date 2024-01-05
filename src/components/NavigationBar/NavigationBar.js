import React from 'react'
import { useState } from 'react'
import './NavigationBar.css'
import logo from '../../Assets/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from 'react-icons/fa'

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div>

      <div className='nav-bar-container'>
        <a href='#Home'><div className='logo-part'>
            <img  className='logo' src={logo}></img>
            </div></a>
        <ul className={isMobile ? "pages-mobile" : 'pages'}

          onClick={() => setIsMobile(false)}  >
          <a href="#Home"> <li>Hotels & Homes</li></a>
          <a href='#Home'> <li>Flights</li></a>
          <a href='#Home'> <li>Airport transfer</li></a>
          <a href='#Home'>  <li>Coupons & Deals</li></a>
          <a href='#Home'>  <li>Apartments</li></a>

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