import React from 'react'
import './Header.css'
import logo from '../../assetts/inspect.jpg'

function Header() {
  return (
    <div className="header_container">
      <div className="header_logo">
        <img src={logo} alt="logo" width="180"/>
      </div>
       <div className="header_title">
         <h1>Car Checker</h1>
         <ul>
           <li>About</li>
           <li>Contact</li>
           <li>Log out</li>
         </ul>
       </div>
      
    </div>
  )
}

export default Header
