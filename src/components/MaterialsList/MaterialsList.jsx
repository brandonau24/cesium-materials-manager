import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import MaterialListItem from './MaterialListItem';

import './MaterialsList.scss';

const materialsSelector = createSelector(
	(state) => state.materials,
	(materials) => materials
);

const MaterialsList = () => {
	const materials = useSelector(materialsSelector);
	let listBody;

	if (!materials || !materials.length) {
		listBody = <div className="__no-materials"><i>No materials</i></div>;
	} else {
		listBody = materials.map((material) => (
			<MaterialListItem key={material.id} material={material} />
		));
	}

	return (
		<div className="materials-list">
			{listBody}
		</div>
	);
};

export default MaterialsList;
