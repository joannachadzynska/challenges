import { createSlice } from '@reduxjs/toolkit';
import { Starlink } from 'types/starlinkTypes';

interface StarlinkState {
	starlinks: Starlink[];
}

const initialState: StarlinkState = {
	starlinks: [],
};

export const starlinksSlice = createSlice({
	name: 'starlinks',
	initialState,
	reducers: {
		getAllStarlink: (state, action) => {
			state.starlinks = action.payload;
		},
	},
});

export const { getAllStarlink } = starlinksSlice.actions;

// export const selectRocketById = (id: string) => (state: RootState) =>
// 	state.starlinks.filter((starlink) => starlink.id === id)[0];

export default starlinksSlice.reducer;
