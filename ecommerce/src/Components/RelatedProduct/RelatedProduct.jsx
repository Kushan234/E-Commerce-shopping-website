import React from 'react'
import './relatedProduct.css'
import Item from '../Items/Item'
import data_product from '../Assest/data'

export const RelatedProduct = () => {
  return (
    <div className='relatedProduct'>
        <h1>Related Product</h1>
        <hr />
        <div className="relatedProduct-item">
            {data_product.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
