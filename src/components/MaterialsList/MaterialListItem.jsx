import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeGetMaterialByIdSelector } from 'selectors/materials';

import './MaterialListItem.scss';

const MaterialListItem = ({ materialId }) => {
	const dispatch = useDispatch();
	const getMaterialById = makeGetMaterialByIdSelector();

	const currentMaterialId = useSelector((state) => state.currentMaterialId);
	const material = useSelector((state) => getMaterialById(state, materialId));

	const onClick = () => dispatch({
		type: 'currentMaterialId/change',
		payload: materialId
	});

	const isSelectedMaterial = currentMaterialId === materialId;
	// Navy blue
	const style = isSelectedMaterial ? { backgroundColor: '#000042' } : null;

	return (
		<button
			onClick={onClick}
			className="material-list-item"
			data-testid="material-list-item"
			type="button"
			style={style}
		>
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
