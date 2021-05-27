import { useAppDispatch } from 'app/hooks';
import { getAllLandpads } from 'features/landpads/landpadsSlice';
import { getLaunches, getNextMission } from 'features/launches/launchesSlice';
import { getAllLaunchpads } from 'features/launchpads/launchpadsSlice';
import { getAllRockets } from 'features/rockets/rocketSlice';
import { useSpaceXClient } from 'hooks/useSpaceXClient';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routing/routes';
import { GlobalStyle } from 'styles/globalStyles';
import Theme from 'themes/theme';

const App: React.SFC = () => {
	const client = useSpaceXClient();
	const dispatch = useAppDispatch();

	const importDataFromAPI = async (): Promise<void> => {
		const [launches, nextLaunch, rockets, landpads, launchpads] =
			await Promise.all([
				client.getAllLaunches(),
				client.getNextLaunch(),
				client.getRockets(),
				client.getLandpads(),
				client.getLaunchpads(),
			]);

		dispatch(getLaunches(launches));
		dispatch(getNextMission(nextLaunch));
		dispatch(getAllRockets(rockets));
		dispatch(getAllLandpads(landpads));
		dispatch(getAllLaunchpads(launchpads));
	};

	useEffect(() => {
		void importDataFromAPI();
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Theme>
			<GlobalStyle />
			<Router>
				<Routes />
			</Router>
		</Theme>
	);
};

export default App;
