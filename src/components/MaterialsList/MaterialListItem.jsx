import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line jsx-a11y/control-has-associated-label
const MaterialListItem = ({ material }) => (
	<button type="button">
		<div className="circle" data-testid="material-color" style={{ color: material.color }} />
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
