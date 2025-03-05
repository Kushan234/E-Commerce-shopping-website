import React from 'react'
import './offers.css'
import exclusive_image from '../Assest/banner.png';

export const Offers = () => {
  return (
    <div className='Offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
        </div>

        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
export default Offers