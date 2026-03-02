import Stripe from 'stripe';

const stripe = new Stripe('your-stripe-key', {
  apiVersion: '2020-08-27'
});

export async function createCustomer(email: string) {
  try {
    return customer.id;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw new Error('Failed to create customer');
  }
}

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      customer,
      payment_method: paymentMethodId,
      off_session: true,
    console.error('Error creating payment intent:', error);
    throw error;
  }

}

export async function handleWebhook(event: any) {
  let data;
  try {
    data = stripe.webhooks.constructEvent(
      event.body,
      event.headers['stripe-signature'],
      'your-webhook-secret'
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    throw new Error('Webhook signature verification failed');