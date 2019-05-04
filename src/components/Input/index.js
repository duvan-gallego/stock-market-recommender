import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({
  alt,
  type,
  name,
  onChange,
  placeholder,
}) => (
    <input
      alt={alt}
      className='input'
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );

Input.propTypes = {
  alt: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;

