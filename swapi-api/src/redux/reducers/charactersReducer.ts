/* eslint-disable import/no-cycle */
import {
  CharactersActionTypes,
  CharactersActions,
} from '../actions/charactersAction';
import { Character, Response } from '../../providers/characterProviders';

const tools: Character[] = [];

const charactersReducer = (
  state = tools,
  action: CharactersActionTypes
): Character[] => {
  switch (action.type) {
    case CharactersActions.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default charactersReducer;
