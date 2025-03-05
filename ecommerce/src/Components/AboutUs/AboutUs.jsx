import React from 'react'
import './Aboutus.css'
import logo from '../Assest/location.png'

export const AboutUs = () => {
    return (
        <div className='about-us'>
            <h1> Providing On-Trend Fashion – For Confidence, That Radiates Through Your Wardrobe</h1>

            <p>The way you dress reveals a lot about your personality and lets people who-who you are before a single word comes out of your mouth. When you shop at Trendy, you can dress in clothes that make a positive statement about who you are.

                Stylish, exciting and remarkably controversial topics	what is an abstract gorgeous clothing and accessories that instantly radiate confidence through your appearance. What’s more, we have carefully hand-picked all our clothing collections, ensuring that fashion for you comes effortlessly while keeping in mind that stunning clothing doesn’t have to come at an unbeatable price.
                Get the fashion today, and feel the effect immediately.</p>

            <h3>It’s time to nail your new-year’s fashion goals.</h3>

            <p>If you want to controversial topics	what is an abstract dress in clothing that’s sleek and attractive, yet versatile too, then you will love shopping at Trendy by Galle. Welcome!</p>

            <div className="contact-us">
                <img src={logo} alt="" />
                <div className="contact-us-address">
                <div>Our Address</div>
                   <div> NO 452,</div>
                   <div> Main Street,</div>
                   <div> Ambalangoda, Sri Lanka</div>
                   <div>PHONE:[+94]76 2400927</div> 
            </div>
        </div>
        </div>
    )
}
export default AboutUs;