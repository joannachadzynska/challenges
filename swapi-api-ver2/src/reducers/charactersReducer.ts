import {
	CharactersPayload,
	CharactersActionTypes,
	CharactersActions,
} from "../actions/charactersActions";

const tools: CharactersPayload[] = [
	{ name: "TypeScript" },
	{ name: "React" },
	{ name: "React Router" },
	{ name: "Stylelint" },
	{ name: "Eslint" },
	{ name: "Redux" },
];

export const charactersReducer = (
	state = tools,
	action: CharactersActionTypes
): CharactersPayload[] => {
	switch (action.type) {
		case CharactersActions.TOOLS_ACTION_ADD:
			return [...state, action.payload];

		default:
			return state;
	}
};
