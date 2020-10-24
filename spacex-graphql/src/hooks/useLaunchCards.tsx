import { useState } from 'react';
import {
	Launch,
	Launches,
	LaunchesPast,
	LaunchesUpcoming,
} from './../models/launches/interfaces/Launch';

type Props = Launches | LaunchesPast | LaunchesUpcoming | undefined;

const useLaunchCards = (data: Props) => {
	const [cards, setCards] = useState<Launch[]>([]);

	return { cards };
};

export default useLaunchCards;
