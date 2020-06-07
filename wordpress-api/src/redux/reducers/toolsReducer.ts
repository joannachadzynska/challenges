import {
	ToolsPayload,
	ToolsActionTypes,
	ToolsActions,
} from "../actions/toolsActions";

const tools: ToolsPayload[] = [
	{ name: "TypeScript" },
	{ name: "React" },
	{ name: "React Router" },
	{ name: "Stylelint" },
	{ name: "Eslint" },
	{ name: "Redux" },
];

const exampleReducer = (
	state = tools,
	action: ToolsActionTypes
): ToolsPayload[] => {
	switch (action.type) {
		case ToolsActions.TOOLS_ACTION_ADD:
			return [...state, action.payload];

		default:
			return state;
	}
};

export default exampleReducer;
