import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual} from 'react-redux';
import { createSelector } from 'reselect';

import MaterialsList from 'components/MaterialsList/MaterialsList';
import Button from 'components/common/form/Button';
import MaterialEditPanel from 'components/MaterialEditPanel/MaterialEditPanel';
import { getMaterialsThunk, addMaterialThunk } from 'thunks/materials';

import './CesiumMaterialsManager.scss';

const totalMaterialsCostSelector = createSelector(
	(state) => state.materials.map((material) => (material.costPerCubicMeter * material.volume)),
	(materialCosts) => {
		const totalMaterialsCost = materialCosts.reduce(
			(totalCost, materialCost) => totalCost + materialCost,
			0
		);

		return totalMaterialsCost.toFixed(2);
	}
);

const defaultMaterial = {
	name: '',
	color: 'black',
	costPerCubicMeter: 0,
	volume: 0,
	deliveryDate: new Date(Date.now()).toISOString().split('T')[0]
};

const CesiumMaterialsManager = () => {
	const totalMaterialsCost = useSelector(totalMaterialsCostSelector, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMaterialsThunk());
	});

	const addMaterialCallback = () => {
		dispatch(addMaterialThunk(defaultMaterial));
	};

	return (
		<div id="cesium-materials-manager">
			<h2>Materials</h2>
			<Button
				className="add-button"
				text="Add"
				onClickCallback={addMaterialCallback}
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
