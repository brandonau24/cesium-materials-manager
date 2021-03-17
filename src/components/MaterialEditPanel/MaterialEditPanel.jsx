import React from 'react';
import { useSelector } from 'react-redux';

import { makeGetMaterialByIdSelector } from 'selectors/materials';
import { makeGetCurrentMatieralIdSelector } from 'selectors/currentMaterialId';

import './MaterialEditPanel.scss';
import MaterialEditPanelBody from './MaterialEditPanelBody';

const MaterialEditPanel = () => {
	const getMaterialById = makeGetMaterialByIdSelector();
	const getCurrentMaterialIdSelector = makeGetCurrentMatieralIdSelector();

	const materialId = useSelector(getCurrentMaterialIdSelector);
	const material = useSelector((state) => getMaterialById(state, materialId));

	let materialEditPanelBody = null;
	if (material) {
		materialEditPanelBody = <MaterialEditPanelBody material={material} />;
	}

	return (
		<div data-testid="material-edit-panel" className="material-edit-panel">
			{materialEditPanelBody}
		</div>
	);
};

export default MaterialEditPanel;
