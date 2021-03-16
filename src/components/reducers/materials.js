import { createSlice } from '@reduxjs/toolkit';
import { addMaterialThunk, getMaterialsThunk } from 'thunks/materials';

const initialState = [];

const materialsSlice = createSlice({
	name: 'materials',
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
		},
		[getMaterialsThunk.fulfilled]: (state, action) => action.payload
	}
});

const materialsReducer = materialsSlice.reducer;

export default materialsReducer;
