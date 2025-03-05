import React, { useContext, useRef, useState } from 'react'
import './navbar.css'
import logo from'../Assest/logo.png'
import cart_icon from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../Assest/dropdown_icon.png'


export const NavBar = () => {

    const [menu,setMenu] = useState ("shop, AboutUs");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();

    const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
   
    <div className='navBar'>
    <div className="nav-logo">
        <img src={logo} alt="" className="logo" />
        
        <h1>TRENDY</h1>
         
    </div>
    <img className='navbar-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
    <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none' }} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("AboutUs")}}><Link style={{textDecoration: 'none' }} to='/AboutUs'>About Us</Link>{menu==="AboutUs"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
      {localStorage.getItem('auth-token')
      ? <button className="login-button" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} >Logout</button>
    :<Link to='/login'><button className="login-button">Login</button></Link> }
    
        <Link to='/cart'><img src={cart_icon} alt="" className="cartIcon" /></Link>
      <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
</div>

  )
}
