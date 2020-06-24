import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GxadxH2jC8UId5XN93eWNy2ZRyx9lxgEx8R86JEb1nBCA5uNXn7ZvUb3iXTYX8b7IkLo9Us0uIdsq6LW7OvJESX00N8oKRnYA'

    const onToken = token => {
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;