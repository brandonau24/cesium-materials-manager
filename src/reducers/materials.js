import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import materialsApi from 'materialsApi';

const sliceName = 'materials';

const initialState = [];

export const addMaterialThunk = createAsyncThunk(
	`${sliceName}/add`,
	async (material) => {
		const response = await materialsApi.addMaterial(material);

		return response;
	}
);

const materialsSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
	},
	extraReducers: {
		[addMaterialThunk.fulfilled]: (state, action) => {
			state.push(action.payload);
		}
	}
});

const materialsReducer = materialsSlice.reducer;

export default materialsReducer;
