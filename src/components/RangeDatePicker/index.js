import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './styles.scss';

const RangeDatePicker = ({ startDate, endDate, onChange }) => (
  <div className='rangeDatePicker'>
    From
    <input
      className='rangeDatePicker__input'
      type="date"
      name='startDate'
      value={startDate}
      min={moment().subtract('years', 1).format('YYYY-MM-DD')}
      max={endDate}
      onChange={onChange}
    />
    To
    <input
      className='rangeDatePicker__input'
      type="date"
      name='endDate'
      value={endDate}
      min={startDate}
      max={moment().format('YYYY-MM-DD')}
      onChange={onChange}
    />
  </div>
);

RangeDatePicker.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default RangeDatePicker;
