import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisheableKey = "pk_test_kN5CCaDH11bJKW5t5Tf81NHy";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert("succesful payment");
        clearCart();
      })
      .catch(error => {
        console.log(error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Unique CRWN Ltd."
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price} $`}
      currency="CAD"
      billingAddress
      shippingAddress
      amount={priceForStripe}
      token={onToken}
      stripeKey={publisheableKey}
      panelLabel="Pay Now"
    />
  );
};

 
const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});


export default connect(
  null, mapDispatchToProps)(StripeCheckoutButton);
