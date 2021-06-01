import { Card } from 'components';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { SectionTitle } from 'styles/SectionTitle';

const Summary: React.SFC<Launch> = (props, { target }) => {
	const data = new LaunchViewModel(props);

	return (
		<section>
			<SectionTitle>mission summary</SectionTitle>

			<Card target={target}>
				{/* <Header {...data} /> */}
				<Card.DetailsContainer>
					{/* <Image {...data} /> */}
					{/* <ContentFull {...data} /> */}
					{/* <LaunchInfo {...data} /> */}
				</Card.DetailsContainer>
			</Card>
		</section>
	);
};

export default Summary;
