import React from 'react';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay } from './styles';
import { Button } from '../Button/styles';
const modalsContainer = document.getElementById('portal')!;

export interface ModalProps {
	isOpen: any;
	onClose: () => void;
}

const Modal: React.SFC<ModalProps> = ({ children, isOpen, onClose }) =>
	isOpen &&
	createPortal(
		<>
			<ModalOverlay />
			<ModalContainer>
				<h2>MODAL TITLE</h2>
				<p>
					Check where I am mounted in the DOM{' '}
					<span role='img' aria-label='emoji1'>
						😃
					</span>
				</p>
				<Button variant='primary' onClick={onClose}>
					CloseMe
				</Button>
			</ModalContainer>
		</>,
		modalsContainer
	);

export default Modal;
