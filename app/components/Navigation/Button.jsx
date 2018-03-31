import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ ...props }) => <button className='button' onClick={props.onClick}>{props.title}</button>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
