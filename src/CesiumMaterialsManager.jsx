import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual} from 'react-redux';
import { createSelector } from 'reselect';

import MaterialsList from 'components/MaterialsList/MaterialsList';
import Button from 'components/common/form/Button';
import MaterialEditPanel from 'components/MaterialEditPanel/MaterialEditPanel';
import { makeGetCurrentMatieralIdSelector } from 'components/selectors/currentMaterialId';
import { getMaterialsThunk, addMaterialThunk, deleteMaterialThunk } from 'thunks/materials';

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

const defaultMaterial = {
	name: 'New Material',
	color: '#42d8b7',
	costPerCubicMeter: 0,
	volume: 0,
	deliveryDate: new Date(Date.now()).toISOString().split('T')[0]
};

const CesiumMaterialsManager = () => {
	const getCurrentMaterialIdSelector = makeGetCurrentMatieralIdSelector();
	const materialId = useSelector(getCurrentMaterialIdSelector);
	const totalMaterialsCost = useSelector(totalMaterialsCostSelector, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMaterialsThunk());
	});

	const addMaterialCallback = () => {
		dispatch(addMaterialThunk(defaultMaterial));
	};

	const deleteMaterialCallback = () => {
		dispatch(deleteMaterialThunk(materialId));
	};

	return (
		<div id="cesium-materials-manager">
			<h2>Materials</h2>
			<div className="action-bar">
				<Button
					className="add-button"
					text="Add"
					onClickCallback={addMaterialCallback}
				/>
				<Button
					className="delete-button"
					text="Delete"
					onClickCallback={deleteMaterialCallback}
				/>
			</div>
			<div className="material-info-container">
				<MaterialsList />
				<MaterialEditPanel />
			</div>
			<div className="__total-materials-cost">{`Total Cost: $${totalMaterialsCost}`}</div>
		</div>
	);
};

export default CesiumMaterialsManager;
