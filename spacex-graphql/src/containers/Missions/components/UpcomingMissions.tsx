import { Card } from 'components';
import { Launch } from 'models/launches/interfaces/Launch';
import * as React from 'react';

const UpcomingMissions: React.SFC = () => {
	const [cards, setCards] = React.useState<Launch[]>([]);

	// const {
	// 	offset,

	// 	ELEMENTS_LIMIT,
	// 	isBottom,
	// 	setIsBottom,
	// } = useInfiniteScroll(cards.length);

	// const { loading, error, data } = useQuery<LaunchesUpcoming>(
	// 	GET_LAUNCHES_UPCOMING,
	// 	{
	// 		variables: {
	// 			offset: offset,
	// 			limit: ELEMENTS_LIMIT,
	// 			order: 'DESC',
	// 			sort: 'launch_date_utc',
	// 		},
	// 	}
	// );

	// React.useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		setIsBottom(false);
	// 	}, 2000);

	// 	if (data?.launchesUpcoming.length) {
	// 		setCards((cards) => [...cards, ...data.launchesUpcoming]);
	// 	}

	// 	return () => clearTimeout(timeout);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [data?.launchesUpcoming]);

	return (
		<section>
			<Card.Break />
			<h1>Upcoming missions</h1>
			<Card.Break />
			<Card.Group>
				{/* {cards.map((card) => (
					<CardContainer key={card.id} {...card} />
				))} */}
			</Card.Group>
			<br />
			<br />
			{/* {isBottom && cards.length > ELEMENTS_LIMIT && 'Loading more data'} */}
		</section>
	);
};

export default UpcomingMissions;
