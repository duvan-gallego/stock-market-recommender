import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Select = ({ noSelectedText, options, onChange, value }) => (
  <select className='select' onChange={onChange} value={value} name='select'>
    <option value=''>{noSelectedText}</option>
    {options.map(option =>
      <option key={option._id} value={option._id}>{option.name}</option>
    )
    }
  </select>
);

Select.defaultProps = {
  noSelectedText: '-- Select an option --',
  options: []
}

Select.propTypes = {
  noSelectedText: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
};

export default Select;

