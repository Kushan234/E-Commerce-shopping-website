import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import Cross_icon from '../../assets/cross_icon.png'

export const ListProduct = () => {

    const [allProducts,setAllProducts]=useState([]);

    const fetchInfo = async () =>{
      await fetch('http://localhost:4000/allproducts')
      .then((res)=>res.json()).then((data)=>{setAllProducts(data)});
    }

      useEffect(()=>{
        fetchInfo();
      },[])

      const remove_product = async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
          method:'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify({id:id})
        })
        await fetchInfo();
      }

  return (
    <div className='listProduct'>
        <h1>All Product List</h1>
       
        <div className="listProduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listProduct-allProduct">
          <hr />
          {allProducts.map((product)=>{

            return  <React.Fragment key={product.id}>
            <div className="listProduct-format-main listProduct-format">
              <img src={product.image} alt="" className='listProduct-product-icon'/>
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{remove_product(product.id)}} src={Cross_icon} alt="" className="listProduct-remove-icon" />
            </div>
            <hr />
            </React.Fragment>
          })}

        </div>
    </div>
  )
}
