import { Character } from "../types/characterTypes";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducers/rootReducer";
import { Action, CombinedState } from "redux";
import { getCharacters } from "../providers/charactersProvider";

// Define all your actions here
export enum CharactersActions {
	IMPORT_DATA = "[characters] IMPORT_DATA",
}

// Interfaces of dispatchers
interface ImportData {
	type: CharactersActions.IMPORT_DATA;
	payload: Map<string, Character[]>;
}

// Union of all dispatchers interfaces
export type CharactersActionTypes = ImportData;

// app thunk
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

// Define all your dispatchers
export const importCharactersFromServer = (
	payload: Map<string, Character[]>
): CharactersActionTypes => ({
	type: CharactersActions.IMPORT_DATA,
	payload,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

export const getCharactersFromServer = (): AppThunk => async (dispatch) => {
	const charactersArray = await getCharacters();
	const charactersMap: Map<string, Character[]> = new Map();

	charactersArray
		.sort((a, b) => (a.name > b.name ? 1 : -1))
		.forEach((character) => {
			let [letter] = character.name;
			letter = letter.toLocaleUpperCase();

			charactersMap.has(letter)
				? charactersMap.get(letter)?.push(character)
				: charactersMap.set(letter, [character]);
		});

	dispatch(importCharactersFromServer(charactersMap));
};
