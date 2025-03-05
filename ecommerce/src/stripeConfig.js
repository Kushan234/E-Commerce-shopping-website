import { loadStripe } from '@stripe/stripe-js';


// Your Stripe publishable key
const stripePromise = loadStripe('pk_test_51PNXfcRoLhS5werXuS5cnq4zDCpgVtGo0c8B4ErOd9Qc3qcB91gW352zSC2Su15u82cyBGmYuFMtDqNTPfnGtaOc00i4VJM81v');
export default stripePromise;