import * as React from 'react';
import { createContext, useContext, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, Close, Container, Inner, Overlay } from './styles/modal';

export interface ModalComposition {
	Body: React.FC;
	Button: React.FC;
	Open: React.FC;
}

export interface ModalContextProps {
	showModal?: boolean;
	setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextProps>({});

const Modal: React.SFC & ModalComposition = ({ children, ...restProps }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			<Container {...restProps}>{children}</Container>
		</ModalContext.Provider>
	);
};

export const ModalBody: React.FC = ({ children, ...restProps }) => {
	const { showModal, setShowModal } = useContext(ModalContext);
	return showModal
		? createPortal(
				<Overlay
					onClick={() => setShowModal && setShowModal(false)}
					{...restProps}>
					<Inner>{children}</Inner>
					<Close />
				</Overlay>,
				document.body
		  )
		: null;
};

export const ModalButton: React.FC = ({ children, ...restProps }) => {
	const { showModal, setShowModal } = useContext(ModalContext);
	return (
		<Button
			onClick={() => setShowModal && setShowModal(!showModal)}
			{...restProps}>
			{children}
		</Button>
	);
};

export const ModalOpen: React.FC = ({ children, ...restProps }) => {
	const { showModal, setShowModal } = useContext(ModalContext);
	const ref = useRef(null);
	return (
		<div
			ref={ref}
			onClick={() => {
				if (setShowModal && ref.current) {
					setShowModal(!showModal);
				}
			}}
			{...restProps}>
			{children}
		</div>
	);
};

Modal.Body = ModalBody;
Modal.Button = ModalButton;
Modal.Open = ModalOpen;

export default Modal;
