import { Tabs } from 'containers';
import React, { createContext, useState } from 'react';
import Routing from './routing';

export interface MissionsContainerProps {}

type CardContextState = {
	currentTarget: React.RefObject<Element>;
	setCurrentTarget: React.Dispatch<
		React.SetStateAction<React.RefObject<Element>>
	>;
};

export const CardContext = createContext<CardContextState>({
	currentTarget: {} as React.RefObject<Element>,
	setCurrentTarget: () => {},
});

const MissionsContainer: React.SFC<MissionsContainerProps> = () => {
	const [currentTarget, setCurrentTarget] = useState<React.RefObject<Element>>(
		{} as React.RefObject<Element>
	);

	return (
		<div>
			<Tabs />
			<CardContext.Provider value={{ currentTarget, setCurrentTarget }}>
				<Routing />
			</CardContext.Provider>
		</div>
	);
};

export default MissionsContainer;
