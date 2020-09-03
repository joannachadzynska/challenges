import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { GET_LAUNCH_DETAILS } from '../../../queries/launchQueries/getLaunch';
import { Launch } from '../../../models/launches/interfaces/Launch';
import { LoadingIndicator } from '../../shared';

const MissionDetails: React.SFC = () => {
	const { id } = useParams();

	const { loading, error, data } = useQuery<Launch>(GET_LAUNCH_DETAILS, {
		variables: {
			id: id,
		},
	});

	if (loading) return <LoadingIndicator />;
	if (error) return <p>Oops! Something went wrong!</p>;
	if (!data) return <p>There is no data to display</p>;
	console.log(data);

	return (
		<div>
			<h2>mission details</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
				doloribus, fugiat ducimus omnis temporibus quasi doloremque porro
				accusantium culpa libero at eveniet quod nesciunt quo est nihil magnam
				tempore necessitatibus nisi, molestias, magni amet! In porro possimus ab
				expedita labore, temporibus odio magnam debitis hic fugit voluptatem
				accusantium accusamus, rem minus aperiam inventore omnis mollitia harum.
				Temporibus tempore hic recusandae quas est itaque qui ad a accusantium
				nesciunt. Repellat quaerat facere harum repudiandae ad recusandae
				accusamus, maiores incidunt commodi, soluta nobis numquam, tempora quas
				odio nulla molestiae eos officiis. Provident hic, asperiores cum
				praesentium officiis non quasi quia necessitatibus fuga?
			</p>
		</div>
	);
};

export default MissionDetails;
