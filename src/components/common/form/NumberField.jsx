/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NumberField = ({
	id,
	onChangeCallback,
	label,
	step,
	defaultNumberValue,
	min,
	...restProps
}) => {
	const [numberValue, setNumberValue] = useState(defaultNumberValue);

	const onNumberValueChange = (event) => setNumberValue(Number.parseFloat(event.target.value));

	useEffect(() => {
		onChangeCallback(numberValue);
	}, [numberValue]);

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={numberValue} type="number" min={min} step={step} onChange={onNumberValueChange} {...restProps} />
		</>
	);
};

NumberField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.node.isRequired,
	step: PropTypes.number,
	onChangeCallback: PropTypes.func,
	defaultNumberValue: PropTypes.number,
	min: PropTypes.number
};

NumberField.defaultProps = {
	step: 1,
	onChangeCallback: () => { },
	defaultNumberValue: 0,
	min: 0
};

export default NumberField;
