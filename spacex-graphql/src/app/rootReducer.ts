import { combineReducers } from '@reduxjs/toolkit';
import launches from './../features/launches/launchesSlice';

const rootReducer = combineReducers({
	launches,
});

export default rootReducer;
