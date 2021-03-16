import React from 'react';

// eslint-disable-next-line jsx-a11y/control-has-associated-label
const MaterialListItem = ({ material }) => (
	<button type="button">
		<div className="circle" data-testid="material-color" style={{ color: material.color }} />
	</button>
);

export default MaterialListItem;
