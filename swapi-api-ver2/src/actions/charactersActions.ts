// Define all your actions here
export enum CharactersActions {
	TOOLS_ACTION_ADD = "example action add",
}

// Interface of your payload object
export interface CharactersPayload {
	name: string;
}

// Interfaces of dispatchers
interface CharactersAdd {
	type: CharactersActions.TOOLS_ACTION_ADD;
	payload: CharactersPayload;
}

// Union of all dispatchers interfaces
export type CharactersActionTypes = CharactersAdd;

// Define all your dispatchers
export const addExampleAction = (
	payload: CharactersPayload
): CharactersActionTypes => ({
	type: CharactersActions.TOOLS_ACTION_ADD,
	payload,
});
