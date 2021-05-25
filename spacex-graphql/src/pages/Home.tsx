import { Footer, Header, Jumbotron } from 'containers';
import { getNextMission } from 'features/launches/launchesSlice';
import React, { useEffect } from 'react';
import { useAppDispatch } from './../app/hooks';
import { useSpaceXClient } from './../hooks/useSpaceXClient';
import { Wrapper } from './../styles/Wrapper';

const Home: React.SFC = () => {
	const client = useSpaceXClient();
	const dispatch = useAppDispatch();

	const getLaunchNext = async () => {
		const data = await client.getNextLaunch();
		dispatch(getNextMission(data));
	};

	useEffect(() => {
		getLaunchNext();
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div
			style={{
				background: 'url(/images/bg/bg1.jpg) center center / cover no-repeat',
				width: '100%',
				height: '100%',
			}}>
			<Wrapper>
				<Header />
				<Jumbotron />
				<Footer />
			</Wrapper>
		</div>
	);
};

export default Home;
