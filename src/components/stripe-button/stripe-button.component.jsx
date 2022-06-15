import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LAwmpBb383LFeuwC9HmqeYl3Qw44o7Igb7pOByS4DarXEjSmfjlqx32gWAWMd7xXQCEuvPzDrpo3C6iFdeQ4y8a00L0wb98LT';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout lable='Pay Now' name='Venus Clothing' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`} amount={priceForStripe} panelLable='Pay Now' token={onToken} stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton;