/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
	id,
	onChangeCallback,
	label,
	step,
	...restProps
}) => {
	const min = 0;
	const [numberValue, setNumberValue] = useState(min);

	const onNumberValueChange = (event) => setNumberValue(event.target.value);

	useEffect(() => {
		onChangeCallback(numberValue);
	});

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={numberValue} type="number" min={min} step={step} onChange={onNumberValueChange} {...restProps} />
		</>
	);
};

TextInputField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	step: PropTypes.number,
	onChangeCallback: PropTypes.func
};

TextInputField.defaultProps = {
	step: 1,
	onChangeCallback: () => { }
};

export default TextInputField;
