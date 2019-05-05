import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, onClick, big, small }) => {

  let extraClass = '';
  extraClass = big && 'button__big';
  extraClass = small && 'button__small';

  return (
    <button
      className={`button ${extraClass}`}
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  )
};

Button.defaultProps = {
  text: 'Text',
}

Button.propTypes = {
  big: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;

