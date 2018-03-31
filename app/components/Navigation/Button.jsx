import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ ...props }) => <a className='button' onClick={props.onClick}>{props.title}</a>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
