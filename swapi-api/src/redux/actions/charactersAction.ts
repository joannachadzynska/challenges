/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable import/no-cycle */
/* eslint-disable import/order */
import { Character, getCharacters } from '../../providers/characterProviders';
import { ThunkDispatch } from 'redux-thunk';
import { Action, CombinedState } from 'redux';

export enum CharactersActions {
  GET_CHARACTERS_SUCCESS = '[characters] GET_CHARACTERS_SUCCESS',
}

interface CharactersGetSuccess {
  type: CharactersActions.GET_CHARACTERS_SUCCESS;
  payload: Map<string, Character[]>;
}

export type CharactersActionTypes = CharactersGetSuccess;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReactType,
//   RootState,
//   unknown,
//   Action<string>
// >;

export type AppThunk<ReturnType = void> = ThunkDispatch<
  CombinedState<{ characters: Character[] }>,
  unknown,
  Action<string>
>;

const importCharactersFromServer = (
  payload: Map<string, Character[]>
): CharactersActionTypes => ({
  type: CharactersActions.GET_CHARACTERS_SUCCESS,
  payload,
});

export const getAllCharacters = (): AppThunk => async (dispatch: any) => {
  const charactersArr = await getCharacters();
  const charactersMap: Map<string, Character[]> = new Map();

  charactersArr
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .forEach((character) => {
      let [letter] = character.name;
      letter = letter.toUpperCase();
      if (charactersMap.has(letter)) {
        charactersMap.get(letter)?.push(character);
      } else {
        charactersMap.set(letter, [character]);
      }
    });

  dispatch(importCharactersFromServer(charactersMap));
};
