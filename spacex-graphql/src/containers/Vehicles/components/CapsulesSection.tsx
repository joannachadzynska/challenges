import { Table } from 'components';
import { LoadingIndicator } from 'components/shared';
import { Capsules } from 'models/capsules/interfaces/Capsule';
import { GET_CAPSULES } from 'queries/capsuleQueries/getCapsules';
import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { SectionTitle } from 'styles/SectionTitle';
import Capsule from './Capsule';

const CapsulesSection: React.SFC = () => {
	const { loading, error, data } = useQuery<Capsules>(GET_CAPSULES);
	if (loading) return <LoadingIndicator />;
	if (error) return <p>Error...</p>;
	if (!data?.capsules) return <p>there is not any data to display</p>;

	return (
		<section>
			<SectionTitle>Capsules</SectionTitle>

			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderItem>Id</Table.HeaderItem>
						<Table.HeaderItem>Type</Table.HeaderItem>
						<Table.HeaderItem>Status</Table.HeaderItem>
						<Table.HeaderItem>Landings</Table.HeaderItem>
						<Table.HeaderItem>Details</Table.HeaderItem>
					</Table.Row>
				</Table.Header>

				<Table.Main>
					{data.capsules.map((capsule) => (
						<Capsule key={capsule.id} {...capsule} />
					))}
				</Table.Main>
			</Table>
		</section>
	);
};

export default CapsulesSection;
