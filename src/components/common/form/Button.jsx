/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './styles/Button.scss';

const Button = ({ onClickCallback, text, ...restProps }) => <button type="button" onClick={onClickCallback} {...restProps}>{text}</button>;

Button.propTypes = {
	onClickCallback: PropTypes.func.isRequired,
	text: PropTypes.string
};

Button.defaultProps = {
	text: ''
};

export default Button;
