import React, { useContext } from 'react'
import './CSS/shopCategory.css'
import { ShopContext } from '../Context/ShopContext.jsx'
import {Item} from '../Components/Items/Item.jsx'




const ShopCategory = (props) => {
  const {all_product}= useContext (ShopContext);

  return (
    <div className='Shop-Category'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
     
      <div className="shopCategory-products">
        {all_product.map((item,i) =>{  
         if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>
          } else {
           return null;
          }   
        })}
      </div>
      
    </div>
  )
}


export default ShopCategory;