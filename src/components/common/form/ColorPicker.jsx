/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const ColorPicker = ({
	id,
	onChangeCallback,
	label,
	value,
	...restProps
}) => {
	const onColorChange = (event) => {
		onChangeCallback(event.target.value);
	};

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={value} type="color" onChange={onColorChange} {...restProps} />
		</>
	);
};

ColorPicker.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChangeCallback: PropTypes.func,
	value: PropTypes.string
};

ColorPicker.defaultProps = {
	onChangeCallback: () => { },
	value: ''
};

export default ColorPicker;
