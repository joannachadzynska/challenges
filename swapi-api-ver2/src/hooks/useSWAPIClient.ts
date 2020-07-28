import React, { useContext, createContext } from 'react';

import { SwapiClient } from '../providers/swapiProvider/SwapiClient';

const SWAPIClientContext = React.createContext(
	new SwapiClient('https://swapi.dev/api')
);

SWAPIClientContext.displayName = 'swapiClient';

export const useSWAPIClient = (): SwapiClient => {
	const clientInstance = useContext(SWAPIClientContext);
	return clientInstance;
};
