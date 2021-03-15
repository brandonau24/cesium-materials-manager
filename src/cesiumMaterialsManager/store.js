import { configureStore } from '@reduxjs/toolkit';
import materialsReducer from 'reducers/materials';

export default configureStore({
	reducer: {
		materials: materialsReducer
	}
});
