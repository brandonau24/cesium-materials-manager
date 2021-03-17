import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeGetMaterialByIdSelector } from 'selectors/materials';

import './MaterialListItem.scss';

const MaterialListItem = ({ materialId }) => {
	const getMaterialById = makeGetMaterialByIdSelector();

	const material = useSelector((state) => getMaterialById(state, materialId));

	return (
		<button className="material-list-item" data-testid="material-list-item" type="button">
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
