import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisheableKey = "pk_test_kN5CCaDH11bJKW5t5Tf81NHy";
  const onToken = token => {
      console.log(token);
      alert('Payment successful !');
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Unique CRWN"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price} $`}
      billingAddress
      shippingAddress
      currency="CAD"
      amount={priceForStripe}
      token={onToken}
      stripeKey={publisheableKey}
      panelLabel="Pay Now"
    />
  );
};

export default StripeCheckoutButton;
