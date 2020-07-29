import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistedReducer } from '../reducers/rootReducer';

export const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);
