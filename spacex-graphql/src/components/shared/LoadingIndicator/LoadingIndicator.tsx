import * as React from 'react';
import { Craters, Loader, Moon } from './styles';

const loader = {
	visible: {
		rotate: [0, 360],
		transition: {
			duration: 4,
			loop: Infinity,
			ease: 'linear',
		},
	},
};

const LoadingIndicator: React.SFC = () => {
	return (
		<Moon>
			<Loader
				variants={loader}
				// initial='hidden'
				animate='visible'
				src='https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png'
				alt='space rocket'
				className='loader'
			/>

			<Craters>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</Craters>
		</Moon>
	);
};

export default LoadingIndicator;
