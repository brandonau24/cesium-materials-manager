/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ColorPicker = ({
	id,
	onChangeCallback,
	label,
	defaultColor,
	...restProps
}) => {
	const [color, setColor] = useState(defaultColor);

	const onColorChange = (event) => setColor(event.target.value);

	useEffect(() => {
		onChangeCallback(color);
	}, [color]);

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={color} type="color" onChange={onColorChange} {...restProps} />
		</>
	);
};

ColorPicker.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChangeCallback: PropTypes.func,
	defaultColor: PropTypes.string
};

ColorPicker.defaultProps = {
	onChangeCallback: () => { },
	defaultColor: ''
};

export default ColorPicker;
