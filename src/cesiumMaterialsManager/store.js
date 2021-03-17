import { configureStore } from '@reduxjs/toolkit';
import materialsReducer from 'reducers/materials';
import currentMaterialIdReducer from 'reducers/currentMaterialId';

export default configureStore({
	reducer: {
		materials: materialsReducer,
		currentMaterialId: currentMaterialIdReducer
	}
});
