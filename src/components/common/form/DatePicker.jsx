/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
	id,
	onChangeCallback,
	label,
	...restProps
}) => {
	const [date, setDate] = useState(0);

	const onDateChange = (event) => setDate(event.target.value);

	useEffect(() => {
		onChangeCallback(date);
	});

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={date} type="date" onChange={onDateChange} {...restProps} />
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
