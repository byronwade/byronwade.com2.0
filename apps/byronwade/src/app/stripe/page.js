'use client';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = ({ amount = 1 }) => {
  const router = useRouter();

  const handler = async () => {
    try {
      const stripe = await asyncStripe;
      const res = await fetch('/api/checkout_session', {
        method: 'POST',
        body: JSON.stringify({
          amount
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      const { sessionId } = await res.json();

      const { error } = await stripe.redirectToCheckout({ sessionId });
      console.log(error);
      if (error) {
        router.push('/error');
      }
    } catch (err) {
      console.log(err);
      router.push('/error');
    }
  };

  return (
    <button
      onClick={handler}
      className="px-8 py-4 text-white duration-200 bg-blue-700 hover:bg-blue-800"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
