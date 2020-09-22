import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { ModalContainer, ModalOverlay } from './styles';
import { Button } from 'styles/Button';

const modalsContainer = document.getElementById('portal')!;

export interface ModalProps {
	isOpen: any;
	onClose: () => void;
}

const overlay = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
};

const modal = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
		},
	},
	hidden: {
		opacity: 0,
		y: '-100vh',
	},
};

const Modal: React.SFC<ModalProps> = ({ children, isOpen, onClose }) =>
	isOpen &&
	createPortal(
		<AnimatePresence exitBeforeEnter>
			<ModalOverlay
				variants={overlay}
				animate='visible'
				initial='hidden'
				exit='hidden'>
				<ModalContainer variants={modal} animate='visible' initial='hidden'>
					<h2>MODAL TITLE</h2>
					<p>
						Check where I am mounted in the DOM{' '}
						<span role='img' aria-label='emoji1'>
							😃
						</span>
					</p>
					<Button onClick={onClose}>CloseMe</Button>
				</ModalContainer>
			</ModalOverlay>
		</AnimatePresence>,
		modalsContainer
	);

export default Modal;
