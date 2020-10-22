import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { MountTransition } from './MountTransition';

type Props = {
	exact?: boolean;
	path: string;
	slide?: number;
	slideUp?: number;
};

export const RouteTransition: FC<Props> = ({
	children,
	exact = false,
	path,
	slide = 0,
	slideUp = 0,
	...rest
}) => (
	<Route exact={exact} path='/admang/service-center' {...rest}>
		<MountTransition slide={slide} slideUp={slideUp}>
			{children}
		</MountTransition>
	</Route>
);

type RoutesProps = {
	exitBeforeEnter?: boolean;
	initial?: boolean;
};

export const AnimatedRoutes: FC<RoutesProps> = ({
	children,
	exitBeforeEnter = true,
	initial = false,
}) => {
	const location = useLocation();
	const { toggleModal } = useModal();
	return (
		<AnimatePresence
			exitBeforeEnter={exitBeforeEnter}
			initial={initial}
			onExitComplete={() => toggleModal()}>
			<Switch location={location} key={location.pathname}>
				{children}
			</Switch>
		</AnimatePresence>
	);
};