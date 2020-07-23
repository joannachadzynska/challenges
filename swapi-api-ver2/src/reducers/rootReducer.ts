import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer";

export const rootReducer = combineReducers({
	characters: charactersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
