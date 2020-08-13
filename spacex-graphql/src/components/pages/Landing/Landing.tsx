import React from 'react';
import { useModal } from '../../../hooks/useModal';
import { Modal } from '../../shared';
import { Button } from '../../shared/Button/styles';

const Landing: React.SFC = () => {
	const { showModal, toggleModal } = useModal();
	return (
		<div>
			Landing page
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
				commodi hic, iusto inventore saepe ipsum ad, ipsa numquam rerum quasi
				iste libero. Expedita magni dolorum exercitationem veritatis sit
				delectus aut amet ad consequatur deserunt possimus sint veniam tempora,
				error itaque suscipit odit dolores explicabo. Quidem, consequuntur.
				Obcaecati ab tempora deleniti?
			</p>
			<Button variant='primary' onClick={toggleModal}>
				show Modal
			</Button>
			<Modal isOpen={showModal} onClose={toggleModal} />
		</div>
	);
};

export default Landing;
