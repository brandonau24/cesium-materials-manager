/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const NumberField = ({
	id,
	onChangeCallback,
	label,
	step,
	value,
	min,
	...restProps
}) => {
	const onNumberValueChange = (event) => {
		onChangeCallback(Number.parseFloat(event.target.value));
	};

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={value} type="number" min={min} step={step} onChange={onNumberValueChange} {...restProps} />
		</div>
	);
};

NumberField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.node.isRequired,
	step: PropTypes.number,
	onChangeCallback: PropTypes.func,
	value: PropTypes.number,
	min: PropTypes.number
};

NumberField.defaultProps = {
	step: 1,
	onChangeCallback: () => { },
	value: 0,
	min: 0
};

export default NumberField;
