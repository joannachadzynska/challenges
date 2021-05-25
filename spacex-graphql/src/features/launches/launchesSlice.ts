import { createSlice } from '@reduxjs/toolkit';
import { Launch } from 'types/launchTypes';

interface LaunchesState {
	launches: Launch[];
	launchesPast: Launch[];
	launchesUpcoming: Launch[];
	launchLatest: Launch;
	launchNext: Launch;
}

const initialState: LaunchesState = {
	launches: [],
	launchesPast: [],
	launchesUpcoming: [],
	launchLatest: {} as Launch,
	launchNext: {} as Launch,
};

export const launchesSlice = createSlice({
	name: 'launches',
	initialState,
	reducers: {
		getAllLaunches: (state, action) => {
			state.launches = action.payload;
		},
		getNextMission: (state, action) => {
			state.launchNext = action.payload;
		},
	},
});

export const { getAllLaunches, getNextMission } = launchesSlice.actions;

export default launchesSlice.reducer;
