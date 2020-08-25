import React from 'react';
import { useModal } from '../../../hooks/useModal';
import { Modal } from '../../shared';
import { Button } from '../../../styles/Button';
import {
	LandingContainer,
	LandingHeader,
	CountdownContainer,
	Countdown,
	CountdownTime,
} from './styles';

const Landing: React.SFC = () => {
	const { showModal, toggleModal } = useModal();

	return (
		<LandingContainer>
			<LandingHeader>
				<h1>
					Space X <br />
					Guider
				</h1>
				<h2>guide web for you</h2>
			</LandingHeader>
			<br />
			<br />
			<CountdownContainer>
				<h2>
					Next Mission: <span>MISSION NAME </span>
				</h2>

				<Countdown>
					<CountdownTime>
						<h1>07</h1>
						<span>days</span>
					</CountdownTime>

					<CountdownTime>
						<h1>10</h1>
						<span>hours</span>
					</CountdownTime>
					<CountdownTime>
						<h1>58</h1>
						<span>minutes</span>
					</CountdownTime>
					<CountdownTime>
						<h1>46</h1>
						<span>seconds</span>
					</CountdownTime>

					<Button>Explore</Button>
				</Countdown>
			</CountdownContainer>
			{/* <Button variant='primary' onClick={toggleModal}>
				show Modal
			</Button>
			<Modal isOpen={showModal} onClose={toggleModal} /> */}
		</LandingContainer>
	);
};

export default Landing;
