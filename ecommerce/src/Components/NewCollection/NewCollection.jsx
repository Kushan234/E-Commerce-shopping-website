import React, { useEffect, useState } from 'react'
import './newCollection.css'
import { Item } from '../Items/Item'

export const NewCollection = () => {

  const [New_Collections,setNew_collection]=useState([]);

    useEffect(()=>{
      fetch('http://localhost:4000/newcollections')
      .then((response)=>response.json())
      .then((data)=>setNew_collection(data));
    },[])

  return (
    <div className='NewCollection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />  
        <div className="collections">
            {New_Collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>
            })} 
            
    </div>    
    </div>
  )
}
export default NewCollection;
