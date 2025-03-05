import React, { useEffect, useState } from 'react'
import './testimonial.css'
import quort_mark from '../Assest/text(1).png'


export const Tsestimonial = ({testimonials,interval}) => {
    const[currentTestimonialIndex,setCurrentTestimonialIndex]=useState(0);

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCurrentTestimonialIndex((prevIndex)=>prevIndex === testimonials.length-1 ? 0 : prevIndex+1);
        },interval);

        return()=>clearInterval(intervalId);
    },[testimonials.length,interval]);

  return (
    <div className="testimonials-slideshow">
        <div className="testimonials">
            <img src={testimonials[currentTestimonialIndex].images} alt="testimonials" />
            <p>{testimonials[currentTestimonialIndex].quote}</p>
            <div className="quort-mark">
            <img src={quort_mark} alt="" />
            <h3>{testimonials[currentTestimonialIndex].author}</h3>
            </div>
        </div>
    </div>
  )
}

export default Tsestimonial;