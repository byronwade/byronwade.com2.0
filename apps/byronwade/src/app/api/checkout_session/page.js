import { stripe } from '@/lib/stripe';

export async function POST(req) {
  if (req.method === 'POST') {
    // 1. Destructure the price and quantity from the POST body
    const { price, quantity = 1, metadata = {} } = await req.json();

    try {
      // 4. Create a checkout session in Stripe
      let session;
      if (price.type === 'recurring') {
        session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          billing_address_collection: 'required',
          customer_update: {
            address: 'auto'
          },
          line_items: [
            {
              price: price.id,
              quantity
            }
          ],
          mode: 'subscription',
          allow_promotion_codes: true,
          subscription_data: {
            trial_from_plan: true,
            metadata
          },
          success_url: `/account`,
          cancel_url: `/`
        });
      } else if (price.type === 'one_time') {
        session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          billing_address_collection: 'required',
          customer_update: {
            address: 'auto'
          },
          line_items: [
            {
              price: price.id,
              quantity
            }
          ],
          mode: 'payment',
          allow_promotion_codes: true,
          success_url: `/account`,
          cancel_url: `/`
        });
      }

      if (session) {
        return new Response(JSON.stringify({ sessionId: session.id }), {
          status: 200
        });
      } else {
        return new Response(
          JSON.stringify({
            error: { statusCode: 500, message: 'Session is not defined' }
          }),
          { status: 500 }
        );
      }
    } catch (err) {
      console.log(err);
      return new Response(JSON.stringify(err), { status: 500 });
    }
  } else {
    return new Response('Method Not Allowed', {
      headers: { Allow: 'POST' },
      status: 405
    });
  }
}
