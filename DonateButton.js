import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from 'react-bootstrap';
const stripePromise = loadStripe(
	'pk_test_51I00IuDgwfUQAUYDWiQ6CokZ50wJdSPeePRHfVU6PUczjITkdgcgaFMQvTIALbF0FID2ZjcL476PmjbgsThIi1o200xAN3GbMJ',
);

const DonationButton = ({ itemID, amount, variant }) => {
	const handleClick = async event => {
		const stripe = await stripePromise;
		stripe
			.redirectToCheckout({
				lineItems: [{ price: itemID, quantity: 1 }],
				mode: 'payment',
				successUrl: window.location.protocol + '//localhost:3000/donate',
				cancelUrl: window.location.protocol + '//localhost:3000/donate', 
				submitType: 'donate',
			})
			.then(function (result) {
				if (result.error) {
					console.log(result);
				}
			});
	};
	return (
		<Button className='my-5 w-75' variant={variant} onClick={handleClick}>
			Donate ${amount}
		</Button>
	);
};

export default DonationButton;
