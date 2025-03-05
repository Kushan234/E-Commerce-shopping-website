import React from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'

export const PaymentForm = ({ totalAmount }) => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Error creating payment method:', error);
    } else {
      console.log('Payment method created successfully:', paymentMethod);
      // Handle the payment method and process the payment
      // For example, send the paymentMethod.id to your server
    }
  };
  
  const withshoppingfee = totalAmount + 4500;

  return (
   
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" enable={!stripe}>
          Pay ${withshoppingfee}
        </button>
      </form>
  )
}
export default PaymentForm;
