/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
	id,
	onChangeCallback,
	label,
	...restProps
}) => {
	const [color, setColor] = useState('');

	const onColorChange = (event) => setColor(event.target.value);

	useEffect(() => {
		onChangeCallback(color);
	});

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={color} type="color" onChange={onColorChange} {...restProps} />
		</>
	);
};

TextInputField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChangeCallback: PropTypes.func
};

TextInputField.defaultProps = {
	onChangeCallback: () => { }
};

export default TextInputField;
