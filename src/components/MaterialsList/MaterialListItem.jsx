import React from 'react';
import PropTypes from 'prop-types';

const MaterialListItem = ({ material }) => (
	<button type="button">
		<div className="circle" data-testid="material-color" style={{ color: material.color }} />
		<div>{material.name}</div>
		<div>{`${material.volume} m3`}</div>
	</button>
);

MaterialListItem.propTypes = {
	material: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		color: PropTypes.string,
		costPerCubicMeter: PropTypes.number,
		volume: PropTypes.number,
		deliveryDate: PropTypes.string
	}).isRequired
};

export default MaterialListItem;
