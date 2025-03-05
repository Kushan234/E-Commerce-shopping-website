import React from 'react'
import './breadCrum.css'
import Arrow_icon from '../Assest/breadcrum_arrow.png'

export const BreadCrum = (props) => {

    const {product} = props;
  return (
    <div className='breadCrum'>
       HOME <img src={Arrow_icon} alt="" /> SHOP <img src={Arrow_icon} alt="" /> {product.category} <img src={Arrow_icon} alt="" /> {product.name}
    </div>
  )
}
