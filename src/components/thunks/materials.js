import { createAsyncThunk } from '@reduxjs/toolkit';
import materialsApi from 'materialsApi';

export const addMaterialThunk = createAsyncThunk(
	'materials/add',
	async (material) => {
		const response = await materialsApi.addMaterial(material);

		return response;
	}
);

export const deleteMaterialThunk = createAsyncThunk(
	'materials/delete',
	async (materialId) => {
		const response = await materialsApi.deleteMaterial(materialId);

		return response;
	}
);

export const modifyMaterialThunk = createAsyncThunk(
	'materials/modify',
	async (material) => {
		const response = await materialsApi.modifyMaterial(material);

		// return response;
	}
);

export const getMaterialsThunk = createAsyncThunk(
	'materials/all',
	async () => {
		const response = await materialsApi.getMaterials();

		return response;
	}
);
