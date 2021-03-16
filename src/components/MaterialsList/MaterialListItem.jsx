import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const getMaterialByIdSelector = createSelector(
	(state) => state.materials,
	(state, materialId) => materialId,
	(materials, materialId) => materials.find((material) => material.id === materialId)
);

const MaterialListItem = ({ materialId }) => {
	const material = useSelector((state) => getMaterialByIdSelector(state, materialId));

	return (
		<button type="button">
			<div className="circle" data-testid="material-color" style={{ color: material.color }} />
			<div>{material.name}</div>
			<div>{`${material.volume} m3`}</div>
		</button>
	);
};

MaterialListItem.propTypes = {
	materialId: PropTypes.string.isRequired
};

export default MaterialListItem;
