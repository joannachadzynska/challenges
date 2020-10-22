import { Jumbotron } from 'components';
import React from 'react';

const Header: React.SFC = () => (
	<Jumbotron.Header>
		<Jumbotron.Title>
			Space X <br />
			Guider
		</Jumbotron.Title>
		<Jumbotron.SubTitle>guide web for you</Jumbotron.SubTitle>
	</Jumbotron.Header>
);

export default Header;
