import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { LoadingIndicator } from 'components/shared';
import { Rockets } from 'models/rockets/interfaces/Rocket';
import { GET_ROCKETS } from 'queries/rocketQueries/getRockets';
import { SectionTitle } from 'styles/SectionTitle';

export interface RocketListingProps {}

const RocketListing: React.SFC<RocketListingProps> = () => {
	const { loading, error, data } = useQuery<Rockets>(GET_ROCKETS);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.rockets) return <p>there is not any data to display</p>;

	console.log(data.rockets);

	return (
		<div>
			<SectionTitle>list of rockets</SectionTitle>
			<ul>
				<li>rocket - 1</li>
				<li>rocket - 2</li>
				<li>rocket - 3</li>
				<li>rocket - 4</li>
				<li>rocket - 5</li>
				<li>rocket - 6</li>
				<li>rocket - 7</li>
				<li>rocket - 8</li>
				<li>rocket - 9</li>
				<li>rocket - 10</li>
				<li>rocket - 11</li>
				<li>rocket - 12</li>
				<li>rocket - 13</li>
				<li>rocket - 14</li>
				<li>rocket - 15</li>
			</ul>
		</div>
	);
};

export default RocketListing;
