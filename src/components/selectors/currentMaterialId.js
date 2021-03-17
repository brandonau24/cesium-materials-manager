/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const makeGetCurrentMatieralIdSelector = () => createSelector(
	(state) => state.currentMaterialId,
	(currentMaterialId) => currentMaterialId
);
