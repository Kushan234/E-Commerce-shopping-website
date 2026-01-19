import React, { useEffect, useState } from 'react'
import './checkout.css'
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'


export const Checkout = () => {
  const location = useLocation();
  const { totalAmount, items } = location.state || {};
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    street: '',
    zipCode: '',
    city: '',
    district: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  useEffect(() => {
    const { firstName, lastName, phone, street, zipCode, city, district } = billingDetails;
    // if all fields are filled
    if (firstName && lastName && phone && street && zipCode && city && district) {
      setIsFormValid(true);
    } else {
     setIsFormValid(false);
      
    }
  }, [billingDetails]);



  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PNXfcRoLhS5werXuS5cnq4zDCpgVtGo0c8B4ErOd9Qc3qcB91gW352zSC2Su15u82cyBGmYuFMtDqNTPfnGtaOc00i4VJM81v");

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/api/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({
          products: items,
          billingDetails,
        }),
      });

      const data = await response.json();
      if (!data.id) throw new Error('Failed to create checkout session');

      const result = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (result.error) {
        console.log(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }

  }


  return (


    <div className="checkout">
      <div className="checkout-left">
        <div>
          <h1>Cart Items</h1>
          <hr />
          <div className="checkout-left-all">
            {items ? items.map(item => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
                <hr />
              </div>
            )) : <p>No items in cart</p>}
            <h3>Total Amount: <h2>${totalAmount}</h2></h3>
          </div>
        </div>
      </div>

      <div className="checkout-right">
        <h1>Billing Details</h1>
        <hr />
        <div className="checkout-right-form-double">
          <div className="checkout-right-form">
            <p>First Name</p>
            <input type="text" name='firstName' value={billingDetails.firstName} onChange={handleChange} />
          </div>
          <div className="checkout-right-form">
            <p>Last Name</p>
            <input type="text" name='lastName' value={billingDetails.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="checkout-right-form">
          <p>Phone Number</p>
          <input type="text" name='phone' value={billingDetails.phone} onChange={handleChange} />
        </div>
        <div className="checkout-right-form">
          <p>Street Address</p>
          <input type="text" name='street' value={billingDetails.street} onChange={handleChange} />
        </div>
        <div className="checkout-right-form-double">
          <div className="checkout-right-form">
            <p>Zip Code</p>
            <input type="text" name='zipCode' value={billingDetails.zipCode} onChange={handleChange} />
          </div>
          <div className="checkout-right-form">
            <p>City</p>
            <input type="text" name='city' value={billingDetails.city} onChange={handleChange} />
          </div>
        </div>
        <div className="checkout-right-form">
          <p>District</p>
          <input type='text' name='district' value={billingDetails.district} onChange={handleChange} />
        </div>


        {!isFormValid && <p className="error-message">Please fill in all billing details to proceed.</p>}
        
        <button onClick={makePayment} disabled={!isFormValid}>Pay ${totalAmount}</button>
      </div>
    </div>

  )
}
export default Checkout;