import { Card } from 'components';
import { Wrapper } from 'components/Header/styles/header';
import {
	ContentFull,
	Header,
	Image,
	LaunchInfo,
} from 'containers/Card/components';
import { Launch } from 'models/launches/interfaces/Launch';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import { SectionTitle } from 'styles/SectionTitle';

const Summary: React.SFC<Launch> = (props) => {
	const data = new LaunchViewModel(props);

	return (
		<Wrapper>
			<section>
				<SectionTitle>mission summary</SectionTitle>

				<Card>
					<Header {...data} />
					<Card.DetailsContainer>
						<Image {...data} />
						<ContentFull {...data} />
						<LaunchInfo {...data} />
					</Card.DetailsContainer>
				</Card>
			</section>
		</Wrapper>
	);
};

export default Summary;
