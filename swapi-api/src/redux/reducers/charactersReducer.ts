/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import {
  CharactersActionTypes,
  CharactersActions,
} from '../actions/charactersAction';
import { Character } from '../../providers/characterProviders';

const characters: Map<string, Character[]> = new Map();

const charactersReducer = (
  state = characters,
  action: CharactersActionTypes
): Map<string, Character[]> => {
  switch (action.type) {
    case CharactersActions.GET_CHARACTERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default charactersReducer;
