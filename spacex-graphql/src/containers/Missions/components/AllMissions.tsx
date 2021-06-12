import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Card } from 'components';
import { CardContainer } from 'containers/Card';
import { updateLaunches } from 'features/launches/launchesSlice';
import React, { useContext } from 'react';
import { Launch } from 'types/launchTypes';
import { sortByDate } from 'utils/sort';
import { CardContext } from '../MissionsContainer';
import useInfiniteScroll from './../../../hooks/useInfiniteScroll';

enum StatusTypes {
	success = 'success',
	failure = 'failure',
	upcoming = 'upcoming',
}

const AllMissions: React.SFC = () => {
	const { currentTarget } = useContext(CardContext);
	const { isIntersecting, elementsLimit } = useInfiniteScroll(currentTarget);
	const dispatch = useAppDispatch();
	const launches = sortByDate(
		useAppSelector((state) => state.launches.launches)
	);

	const length = launches.slice(0, elementsLimit).length;

	const filterByStatus = (arr: Launch[], status: string) => {
		const copy: Launch[] = JSON.parse(JSON.stringify(arr));
		if (status === 'success') {
			return copy.filter((launch) => launch.success);
		} else if (status === 'upcoming') {
			return copy.filter((launch) => launch.upcoming);
		} else if (status === 'failure') {
			return copy.filter((launch) => !launch.success);
		} else {
			return copy;
		}
	};

	const handleOnChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		const filteredLaunches = filterByStatus(launches, value);
		dispatch(updateLaunches(filteredLaunches));
	};

	return (
		<section>
			<Card.Break />
			<h1>All missions</h1>

			<div>
				<label htmlFor='status-type'>
					Filter by status type:
					<select
						name='status-type'
						id='status-type'
						onChange={handleOnChangeStatus}>
						<option value=''>-- please choose an option--</option>
						<option value={StatusTypes.success}>Success</option>
						<option value={StatusTypes.failure}>Failure</option>
						<option value={StatusTypes.upcoming}>Upcoming</option>
					</select>
				</label>
			</div>
			<Card.Break />

			<Card.Group>
				{launches.slice(0, elementsLimit).map((launch) => (
					<CardContainer target={currentTarget} key={launch.id} {...launch} />
				))}
			</Card.Group>

			{isIntersecting && length < launches.length && <div>Load more...</div>}
		</section>
	);
};

export default AllMissions;
