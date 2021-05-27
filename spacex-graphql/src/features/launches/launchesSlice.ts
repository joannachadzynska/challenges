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
		getLaunches: (state, action) => {
			state.launches = action.payload;
		},
		getLaunchesUpcoming: (state, action) => {
			state.launchesUpcoming = action.payload;
		},
		getLaunchesPast: (state, action) => {
			state.launchesPast = action.payload;
		},
		getLatestMission: (state, action) => {
			state.launchLatest = action.payload;
		},
		getNextMission: (state, action) => {
			state.launchNext = action.payload;
		},
	},
});

export const {
	getLaunches,
	getNextMission,
	getLaunchesUpcoming,
	getLatestMission,
	getLaunchesPast,
} = launchesSlice.actions;

export default launchesSlice.reducer;
