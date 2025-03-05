import React, { useState } from 'react'
import './newsLetter.css'
import emailjs from 'emailjs-com';

export const NewsLetter = () => {

  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: email,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send email.');
      });
  };


  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe Our Newsletter and Stay Updated</p>
      <form onSubmit={sendEmail}>
        <input 
          type="email" 
          className="email" 
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Email</button>
      </form>
    </div>
  )
}
export default NewsLetter;