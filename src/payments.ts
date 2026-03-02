import { Stripe } from 'stripe';

const stripe = new Stripe('your-stripe-key', { apiVersion: '2020-08-27' });

export async function createCharge(amount: number, currency: string, source: string) {
    try {
        const charge = await stripe.charges.create({
            amount,
            currency,
            source,
            description: 'Charge for product'
        });
        return charge;
    } catch (error) {
        throw new Error(`Failed to create charge: ${error.message}`);
    }
}

export async function handleWebhook(requestBody: Buffer, sig: string) {
    try {
        const event = stripe.webhooks.constructEvent(requestBody.toString(), sig, 'your-webhook-secret');
        // Handle the event
        return event;
    } catch (error) {
}

export async function createCustomer(email: string, paymentMethod: string) {
    try {
        const customer = await stripe.customers.create({
            email,
            payment_method: paymentMethod,
            invoice_settings: {
            }
        });
        return customer;
    } catch (error) {
        throw new Error(`Failed to create customer: ${error.message}`);
    }
}