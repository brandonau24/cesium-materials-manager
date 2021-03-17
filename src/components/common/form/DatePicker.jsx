/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({
	id,
	onChangeCallback,
	label,
	defaultDate,
	...restProps
}) => {
	const [date, setDate] = useState(defaultDate);

	const onDateChange = (event) => setDate(event.target.value);

	useEffect(() => {
		onChangeCallback(date);
	}, [date]);

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} value={date} type="date" onChange={onDateChange} {...restProps} />
		</>
	);
};

DatePicker.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChangeCallback: PropTypes.func,
	defaultDate: PropTypes.string
};

DatePicker.defaultProps = {
	onChangeCallback: () => { },
	defaultDate: new Date(Date.now()).toISOString().split('T')[0]
};

export default DatePicker;
