import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const currentMaterialIdSlice = createSlice({
	name: 'currentMaterialId',
	initialState,
	reducers: {
		change: (state, action) => action.payload
	}
});

const currentMaterialIdReducer = currentMaterialIdSlice.reducer;

export default currentMaterialIdReducer;
