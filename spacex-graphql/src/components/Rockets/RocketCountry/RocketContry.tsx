import React from 'react';
import { Rocket } from '../../../models/Rocket';

type RocketCountryProps = Pick<Rocket, 'country'>;

const RocketCountry: React.SFC<RocketCountryProps> = ({ country }) => (
	<p>Country: {country}</p>
);

export default RocketCountry;
