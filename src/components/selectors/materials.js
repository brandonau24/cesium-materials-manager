/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const makeGetMaterialByIdSelector = () => createSelector(
	(state) => state.materials,
	(state, materialId) => materialId,
	(materials, materialId) => materials.find((material) => material.id === materialId)
);
