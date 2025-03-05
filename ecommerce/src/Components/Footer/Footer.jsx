import React from 'react'
import './footer.css'
import footer_logo from '../Assest/logo_big.png'
import Instergram_icon from '../Assest/instagram_icon.png'
import pinterest_icon from '../Assest/pintester_icon.png'
import whatsapp_icon from '../Assest/whatsapp_icon.png'

export const Footer = () => {
  return (
    
    <div className='Footer'>
        <a href='#' className='scroll-button'>
            <button>Scroll</button>
        </a>
        
        <div className="footer-logo">
            <img src={footer_logo} alt="" className="" />
            <p>TRENDY</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
            <img src={Instergram_icon} alt="" className="" />
            </div>
            <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" className="" />
            </div>
            <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" className="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2025 - All Right Reserved</p>
        </div>

    </div>
  )
}
export default Footer