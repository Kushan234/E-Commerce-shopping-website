import React, { useEffect, useState } from 'react'
import './slider.css'

export const Slider = ({images}) => {

    const [currentSlide,setCurrentSlide] =useState(0);;

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentSlide((prevSlide)=>prevSlide===images.length-1 ? 0 : prevSlide +1);
        },3000);
        return ()=> clearInterval(interval);
    },[images]);

  return (

        <div className="slider-container">
            {images.map((image,index)=>(
                <img key={index}
                src={image}
                 alt={`slide ${index}`}
                 className={index === currentSlide ? 'active' :  ''} />
            ))}
        </div>
  );
};

export default Slider;