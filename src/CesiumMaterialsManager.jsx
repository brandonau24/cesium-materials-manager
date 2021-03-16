import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import MaterialsList from 'components/MaterialsList/MaterialsList';

import './CesiumMaterialsManager.scss';
import MaterialEditPanel from './components/MaterialEditPanel/MaterialEditPanel';

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

	return (
		<div id="cesium-materials-manager">
			<h2>Materials</h2>
			<MaterialsList />
			<MaterialEditPanel />
			<div className="__total-materials-cost">{`Total Cost: $${totalMaterialsCost}`}</div>
		</div>
	);
};

export default CesiumMaterialsManager;
