import { combineReducers } from '@reduxjs/toolkit';
import landpads from 'features/landpads/landpadsSlice';
import launches from 'features/launches/launchesSlice';
import launchpads from 'features/launchpads/launchpadsSlice';
import rockets from 'features/rockets/rocketSlice';
import starlinks from 'features/starlinks/starlinksSlice';

const rootReducer = combineReducers({
	launches,
	landpads,
	launchpads,
	rockets,
	starlinks,
});

export default rootReducer;
