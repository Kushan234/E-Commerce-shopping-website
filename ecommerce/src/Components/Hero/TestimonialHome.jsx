import React, { useEffect, useState } from 'react'
import './testimonialsHome.css'


export const TestimonialHome = ({testimonials1,interval}) => {

    const[currentTestimonialIndex,setCurrentTestimonialIndex]=useState(0);

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCurrentTestimonialIndex((prevIndex)=>prevIndex === testimonials1.length-1 ? 0 : prevIndex+1);
        },interval);

        return()=>clearInterval(intervalId);
    },[testimonials1.length,interval]);


  return (

    <div className="testimonials-slideshow1">
    <div className="testimonials1">
        <img src={testimonials1[currentTestimonialIndex].images} alt="testimonials1" />
        <p>{testimonials1[currentTestimonialIndex].quote}</p>
        <h3>{testimonials1[currentTestimonialIndex].author}</h3>
        <h1>{testimonials1[currentTestimonialIndex].author1}</h1>
      
        </div>
    </div>


  )
}

export default TestimonialHome;
