import React, { useContext, useState } from 'react'
import './productDisplay.css'
import Star_icon from '../Assest/star_icon.png'
import starDull_icon from '../Assest/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


export const ProductDisplay = (props) => {
  
    const {product} = props;
    const [selectedSize, setSelectedSize] = useState('');
    const {addToCartWithSize}=useContext(ShopContext);

    const handleSizeSelect = (size) => {
      setSelectedSize(size);
  };
  
  return (
    <div className='ProductDisplay'>
        <div className="productDisplay-Left">
          <div className="productDisplay-img-List">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            </div>  
            <div className="productDisplay-image">
                <img  src={product.image} alt="" className="productDisplay-main-img" />
            </div>
        </div>
        <div className="productDisplay-Right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
            <img src={Star_icon} alt="" />
            <img src={Star_icon}  alt="" />
            <img src={Star_icon}  alt="" />
            <img src={Star_icon}  alt="" />
            <img src={starDull_icon} alt="" />
            <p>(125)</p>
        </div>
        <div className="productDisplay-right-price">
          <div className="productDisplay-right-price-old">
          ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
          </div>
          <div className="productDisplay-right-size">
            <h1>Select Size</h1>
            <div className="productDisplay-right-sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
           <div key={size} onClick={() => handleSizeSelect(size)} className={selectedSize === size ? 'selected' : ''}>
            {size}
             </div>
            ))}
          </div>
          </div>
          <button onClick={()=>{addToCartWithSize(product.id , selectedSize)}}>ADD TO CART</button>
          <p className='productDisplay-right-category'>
          <span>Category: </span>{product.category} </p>

          <p className='productDisplay-right-category'>
          <span>Tags: </span>Modern, Latest  </p>
  
        </div>
        </div>
    
  )
}


export default ProductDisplay;