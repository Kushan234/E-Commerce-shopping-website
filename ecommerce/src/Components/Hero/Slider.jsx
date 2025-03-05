import React from 'react'
import './slider.css'
import TestimonialHome from './TestimonialHome';


export const Slider = () => {

    const testimonials1 = [
        {
            author: "Unlock Your Savings! ",
            author1: "Enjoy 20% Off ",
            quote: "Enjoy an exclusive 20% off on all your favorite items. Refresh your style, upgrade your home, and find perfect gifts with this limited-time offer. Don't miss out—shop now and save big!", 
            images: 'https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?t=st=1714236260~exp=1714239860~hmac=2c2eb59edcac679b413a9239b367047b53838b89905085fa4572b146b0766767&w=740',
        },
        {
            author: "Unlock Your Savings!",
            author1: "Enjoy 20% Off  ",
            quote: "Enjoy an exclusive 20% off on all your favorite items. Refresh your style, upgrade your home, and find perfect gifts with this limited-time offer. Don't miss out—shop now and save big!",
            images: 'https://img.freepik.com/free-photo/happy-girl-smiling_23-2148155774.jpg?t=st=1714236687~exp=1714240287~hmac=eeedd5c6c86c42a829e95a5c33d49a775e39a918a9afe16ba975e3061920bd6f&w=740',
        },
        {

            author: "Unlock Your Savings!",
            author1: "Enjoy 20% Off ",
            quote: "Enjoy an exclusive 20% off on all your favorite items. Refresh your style, upgrade your home, and find perfect gifts with this limited-time offer. Don't miss out—shop now and save big!",
            images: 'https://img.freepik.com/free-photo/happy-good-looking-blond-girl-pointing-fingers-upper-left-corner-with-excited-face_176420-22035.jpg?t=st=1714236786~exp=1714240386~hmac=0447664ed3f4a4b19953b6df68d2f8cad75507892ab3cdb8215e77be96533d6e&w=740',
        },
    ];
    

    const interval=5000;

    
  return (
    
       <div className="slider">
           <TestimonialHome testimonials1={testimonials1} interval={interval} />
       </div>
  )
}

export default Slider;