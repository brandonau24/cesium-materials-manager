import React from 'react';
import MaterialsList from 'components/MaterialsList/MaterialsList';

import './CesiumMaterialsManager.scss';

const CesiumMaterialsManager = () => (
	<div style={{ backgroundColor: '#24242b' }} id="cesium-materials-manager">
		<h2>Materials</h2>
		<MaterialsList />
	</div>
);

export default CesiumMaterialsManager;
