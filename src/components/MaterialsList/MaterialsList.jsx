import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import MaterialListItem from './MaterialListItem';

import './MaterialsList.scss';

const materialsByIdSelector = createSelector(
	(state) => state.materials,
	(materials) => materials.map((material) => material.id)
);

const MaterialsList = () => {
	const materialsById = useSelector(materialsByIdSelector);
	let listBody;

	if (!materialsById || !materialsById.length) {
		listBody = <div className="__no-materials"><i>No materials</i></div>;
	} else {
		listBody = materialsById.map((id) => (
			<MaterialListItem key={id} materialId={id} />
		));
	}

	return (
		<div className="materials-list">
			{listBody}
		</div>
	);
};

export default MaterialsList;
