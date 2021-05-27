import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Launchpad } from 'types/launchpadTypes';

interface LaunchpadState {
	launchpads: Launchpad[];
}

const initialState: LaunchpadState = {
	launchpads: [],
};

export const launchpadSlice = createSlice({
	name: 'launchpads',
	initialState,
	reducers: {
		getAllLaunchpads: (state, action) => {
			state.launchpads = action.payload;
		},
	},
});

export const { getAllLaunchpads } = launchpadSlice.actions;

export const selectLaunchpadById = (id: string) => (state: RootState) =>
	state.launchpads.launchpads.filter((launchpad) => launchpad.id === id)[0];

export default launchpadSlice.reducer;
