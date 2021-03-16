import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import MaterialsList from 'components/MaterialsList/MaterialsList';
import Button from 'components/common/form/Button';
import MaterialEditPanel from 'components/MaterialEditPanel/MaterialEditPanel';
import { getMaterialsThunk } from 'thunks/materials';

import './CesiumMaterialsManager.scss';

const totalMaterialsCostSelector = createSelector(
	(state) => state.materials,
	(materials) => {
		const totalMaterialsCost = materials.reduce(
			(totalCost, material) => totalCost + (material.volume * material.costPerCubicMeter),
			0
		);

		return totalMaterialsCost.toFixed(2);
	}
);

const CesiumMaterialsManager = () => {
	const totalMaterialsCost = useSelector(totalMaterialsCostSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMaterialsThunk());
	});

	return (
		<div id="cesium-materials-manager">
			<h2>Materials</h2>
			<Button
				className="add-button"
				text="Add"
				onClickCallback={() => { }}
			/>
			<Button
				className="delete-button"
				text="Delete"
				onClickCallback={() => { }}
			/>
			<MaterialsList />
			<MaterialEditPanel />
			<div className="__total-materials-cost">{`Total Cost: $${totalMaterialsCost}`}</div>
		</div>
	);
};

export default CesiumMaterialsManager;
