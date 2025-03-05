import React from 'react'
import './TesApp.css'
import { Tsestimonial } from './Tsestimonial';


export const App = () => {
    const testimonials = [
        {
            quote: "I love shopping here! The products are always top-notch, and the discounts are unbeatable. I recently saved 20% on my order, and it arrived quickly. Highly recommended!", 
            author: "-Sumith A.N",
            images: 'https://img.freepik.com/free-vector/mans-flat-style-face_90220-2938.jpg?t=st=1722440141~exp=1722443741~hmac=371ff41b700e0cb62bd1ef7110c7b56c3be05c68f7fe9aa315ac758506ea8547&w=826',
        },
        {
            quote: "Every time I shop here, I find exactly what I need. The 20% off sale was a fantastic bonus. The site is easy to navigate, and my orders always arrive on time. A+ service!",
            author: "-Niroshan T.W",
            images: 'https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?t=st=1722440205~exp=1722443805~hmac=65b177c5cbf9c83a1fd6d391c8f1791433aab125c3fa95849c2722040f9558e6&w=826',
        },
        {
            quote: "This website never disappoints. The selection is great, and the prices are even better with the 20% discount. The customer service team is always helpful and responsive. I'll continue to be a loyal customer!",
            author: "-S.pathumika",
            images: 'https://img.freepik.com/free-vector/flat-style-woman-face_90220-2936.jpg?t=st=1722440216~exp=1722443816~hmac=e77172df1ada908b1e5ffeaf118fbf47362ff27aa4c968aac07ea2f5d77f3fbb&w=826',
        },
    ];

    const interval=5000;

    return (
        
        <div className="app">
            <h1>CUSTOMER'S TESTIMONIALS</h1>
            <hr />
            <Tsestimonial testimonials={testimonials} interval={interval}/>
            
        </div>
  )
}

export default App;