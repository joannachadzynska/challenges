import { LoadingIndicator } from 'components/shared';
import { Rockets } from 'models/rockets/interfaces/Rocket';
import { GET_ROCKETS } from 'queries/rocketQueries/getRockets';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { SectionTitle } from 'styles/SectionTitle';

export interface VehiclesContainerProps {}

const VehiclesContainer: React.SFC<VehiclesContainerProps> = () => {
	const { loading, error, data } = useQuery<Rockets>(GET_ROCKETS);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.rockets) return <p>there is not any data to display</p>;

	return (
		<section>
			<SectionTitle>list of rockets</SectionTitle>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae
				quidem, cumque iure quos ex numquam fugiat ipsum sed non.
			</div>
		</section>
	);
};

export default VehiclesContainer;
