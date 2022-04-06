import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import DonationButton from './DonateButton';

const Donate = () => {
	<Container>
        <h1>hello</h1>
		<Row>
			<Col md={4}>
				<Card bg='light' text='white' className='mb-2'>
					<Card.Header>Donate Here</Card.Header>
					<Card.Body>
						<Card.Title>Thank you for your donation! </Card.Title>
						<Card.Text>
						Your donation helps us keep improving the site
						</Card.Text>
						<DonationButton
							amount={'19.99'}
							itemID='price_1KXD9IDgwfUQAUYDUHUPSpT4'
						/>
					</Card.Body>
				</Card>
			</Col>
			<Col md={4}>
				<Card bg='light' text='white' className='mb-2'>
					<Card.Header>Donate $49 Here</Card.Header>
					<Card.Body>
						<Card.Title>Thank you for your donation! </Card.Title>
						<Card.Text>
						Your donation helps us keep improving the site
						</Card.Text>
						<DonationButton
							amount={'49.99'}
							itemID='price_1KXD9IDgwfUQAUYDUHUPSpT4'
						/>
					</Card.Body>
				</Card>
			</Col>
			<Col md={4}>
				<Card bg='light' text='white' className='mb-2'>
					<Card.Header>Donate $99 Here</Card.Header>
					<Card.Body>
						<Card.Title>Thank you for your donation! </Card.Title>
						<Card.Text>
						Your donation helps us keep improving the site
						</Card.Text>
						<DonationButton
							amount={'99.99'}
							itemID='price_1KXD9IDgwfUQAUYDUHUPSpT4'
						/>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</Container>;
};

export default Donate;
