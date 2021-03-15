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

export const deleteMaterialThunk = createAsyncThunk(
	`${sliceName}/delete`,
	async (materialId) => {
		const response = await materialsApi.deleteMaterial(materialId);

		return response;
	}
);

export const modifyMaterialThunk = createAsyncThunk(
	`${sliceName}/modify`,
	async (material) => {
		const response = await materialsApi.modifyMaterial(material);

		return response;
	}
);

const materialsSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		delete: (state, action) => state.filter((material) => material.id !== action.payload),
		modify: (state, action) => {
			const materialToUpdate = state.findIndex((material) => material.id === action.payload.id);

			if (materialToUpdate >= 0) {
				state[materialToUpdate] = {
					...state[materialToUpdate],
					...action.payload
				};
			}
		}
	},
	extraReducers: {
		[addMaterialThunk.fulfilled]: (state, action) => {
			state.push(action.payload);
		}
	}
});

const materialsReducer = materialsSlice.reducer;

export default materialsReducer;
