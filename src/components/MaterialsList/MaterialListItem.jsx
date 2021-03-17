import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeGetMaterialByIdSelector } from 'selectors/materials';

import './MaterialListItem.scss';

const MaterialListItem = ({ materialId }) => {
	const dispatch = useDispatch();
	const getMaterialById = makeGetMaterialByIdSelector();

	const material = useSelector((state) => getMaterialById(state, materialId));

	const onClick = () => dispatch({
		type: 'currentMaterialId/change',
		payload: materialId
	});

	return (
		<button onClick={onClick} className="material-list-item" data-testid="material-list-item" type="button">
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
