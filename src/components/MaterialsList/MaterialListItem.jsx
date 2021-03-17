import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeGetMaterialByIdSelector } from 'selectors/materials';
import { makeGetCurrentMatieralIdSelector } from 'selectors/currentMaterialId';

import './MaterialListItem.scss';

const MaterialListItem = ({ materialId }) => {
	const dispatch = useDispatch();
	const getMaterialByIdSelector = makeGetMaterialByIdSelector();
	const getCurrentMaterialIdSelector = makeGetCurrentMatieralIdSelector();

	const currentMaterialId = useSelector(getCurrentMaterialIdSelector);
	const material = useSelector((state) => getMaterialByIdSelector(state, materialId));

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
