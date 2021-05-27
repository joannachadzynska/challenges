import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Rocket } from 'types/rocketTypes';

interface RocketState {
	rockets: Rocket[];
}

const initialState: RocketState = {
	rockets: [],
};

export const rocketsSlice = createSlice({
	name: 'rockets',
	initialState,
	reducers: {
		getAllRockets: (state, action) => {
			state.rockets = action.payload;
		},
	},
});

export const { getAllRockets } = rocketsSlice.actions;

export const selectRocketById = (id: string) => (state: RootState) =>
	state.rockets.rockets.filter((rocket) => rocket.id === id)[0];

export default rocketsSlice.reducer;
