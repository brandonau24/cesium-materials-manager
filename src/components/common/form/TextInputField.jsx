/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
	id,
	onChangeCallback,
	label,
	defaultInputValue,
	...restProps
}) => {
	const [inputValue, setInputValue] = useState(defaultInputValue);

	const onInputValueChange = (event) => setInputValue(event.target.value);

	useEffect(() => {
		onChangeCallback(inputValue);
	}, [inputValue]);

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={inputValue} type="text" onChange={onInputValueChange} {...restProps} />
		</>
	);
};

TextInputField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChangeCallback: PropTypes.func,
	defaultInputValue: PropTypes.string
};

TextInputField.defaultProps = {
	onChangeCallback: () => { },
	defaultInputValue: ''
};

export default TextInputField;
