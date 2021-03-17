/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const defaultMaterial = {
	name: 'New Material',
	color: '#42d8b7',
	costPerCubicMeter: 0,
	volume: 0,
	deliveryDate: new Date(Date.now()).toISOString().split('T')[0]
};

export const makeGetMaterialByIdSelector = () => createSelector(
	(state) => state.materials,
	(state, materialId) => materialId,
	(materials, materialId) => materials.find((material) => material.id === materialId)
);
