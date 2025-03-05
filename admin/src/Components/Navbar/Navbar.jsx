import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
    <img src={logo} alt="" />
   <h1>TRENDY</h1>
    </div>
    </div>
  )
}
