import { combineReducers } from "redux";
import exampleReducer from "./toolsReducer";
import postReducer from "./postReducer";

export const rootReducer = combineReducers({
	example: exampleReducer,
	posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
