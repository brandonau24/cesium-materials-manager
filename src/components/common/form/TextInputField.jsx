/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
	id,
	onChangeCallback,
	label,
	value,
	...restProps
}) => {
	const onInputValueChange = (event) => {
		onChangeCallback(event.target.value);
	};

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={value} type="text" onChange={onInputValueChange} {...restProps} />
		</div>
	);
};

TextInputField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChangeCallback: PropTypes.func,
	value: PropTypes.string
};

TextInputField.defaultProps = {
	onChangeCallback: () => { },
	value: ''
};

export default TextInputField;
