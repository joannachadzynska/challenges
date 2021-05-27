import { createSlice } from '@reduxjs/toolkit';
import { Landpad } from 'types/landpadTypes';

interface LandpadsState {
	landpads: Landpad[];
}

const initialState: LandpadsState = {
	landpads: [],
};

export const landpadsSlice = createSlice({
	name: 'landpads',
	initialState,
	reducers: {
		getAllLandpads: (state, action) => {
			state.landpads = action.payload;
		},
	},
});

export const { getAllLandpads } = landpadsSlice.actions;

export default landpadsSlice.reducer;
