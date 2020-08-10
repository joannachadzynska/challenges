import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import styled, { ThemeProvider } from 'styled-components';
import { boxStyles, Button } from './themes/myTheme';

import './App.css';

const GET_LAUNCHES = gql`
	{
		launchesPast {
			mission_name
			details
			links {
				flickr_images
			}
		}
	}
`;

type LaunchesPast = {
	mission_name: string;
	details: any;
	links: any;
};

const Box = styled.div`
	${boxStyles}
`;

const App: React.SFC = () => {
	const [themeMode, setThemeMode] = useState('light');
	const { loading, error, data } = useQuery(GET_LAUNCHES);

	if (loading) return <h3>Loading..</h3>;
	if (error) return <p>Error...</p>;

	const getRandomImg = (images: string[]) =>
		images[Math.floor(Math.random() * images.length)];

	const toggleTheme = () => {
		themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
	};

	return (
		<ThemeProvider theme={{ mode: `${themeMode}` }}>
			<Button variant='success' onClick={toggleTheme}>
				change theme
			</Button>
			{data.launchesPast.map((launch: LaunchesPast) => (
				<Box key={launch.mission_name}>
					<h1>🛰 {launch.mission_name}</h1>
					<p>{launch.details}</p>
					<img
						src={getRandomImg(launch.links.flickr_images)}
						width='200'
						alt={launch.mission_name}
					/>
					<Button>Default</Button>
					<Button variant='primary'>click me</Button>
					<Button variant='success'>click me</Button>
					<Button variant='warning'>click me</Button>
				</Box>
			))}
		</ThemeProvider>
	);
};

export default App;
