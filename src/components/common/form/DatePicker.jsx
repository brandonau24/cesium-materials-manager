/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({
	id,
	onChangeCallback,
	label,
	value,
	...restProps
}) => {
	const onDateChange = (event) => {
		onChangeCallback(event.target.value);
	};

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={value} type="date" onChange={onDateChange} {...restProps} />
		</>
	);
};

DatePicker.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChangeCallback: PropTypes.func,
	value: PropTypes.string
};

DatePicker.defaultProps = {
	onChangeCallback: () => { },
	value: new Date(Date.now()).toISOString().split('T')[0]
};

export default DatePicker;
