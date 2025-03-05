import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import logo1 from '../../assets/dashboard.png'
export const Sidebar = () => {
  return (
    
      <div className='sidebar'>
        <Link to={'/dashboard'} style={{textDecoration:"none"}}> 
        <div className="sidebar-item1">
            <img src={logo1} alt="" />
            <p>Dashboard</p>
        </div>
        </Link>

        <Link to={'/addproduct'} style={{textDecoration:"none"}}> 
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
        </Link>

        <Link to={'/listproduct'} style={{textDecoration:"none"}}> 
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
        </Link>
    </div>
      
    
  )
}
