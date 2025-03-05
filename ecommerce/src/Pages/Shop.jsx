import React from 'react'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollection/NewCollection'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { App } from '../Components/Testimonial/App'
import Slider from '../Components/Hero/Slider'








export const Shop = () => {
  return (
    <div>

    <Slider />
    <Popular />
    <Offers />
    <NewCollection />
    <App /> 
    <NewsLetter />
    

    </div>
  )
}


export default Shop