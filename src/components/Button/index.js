import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, onClick }) => (
  <button
    className='button'
    type='button'
    onClick={onClick}
  >
    {text}
  </button>
);

Button.defaultProps = {
  text: 'Text'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;

