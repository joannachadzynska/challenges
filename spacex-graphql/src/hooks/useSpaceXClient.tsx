import { SpaceXClient } from 'providers/spaceXProvider';
import { createContext, useContext } from 'react';

const SpaceXClientContext = createContext(
	new SpaceXClient('https://api.spacexdata.com/v4')
);

SpaceXClientContext.displayName = 'spaceXClient';

export function useSpaceXClient(): SpaceXClient {
	const clientInstance = useContext(SpaceXClientContext);

	return clientInstance;
}
