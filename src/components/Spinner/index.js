import React from 'react';
import PropTypes from 'prop-types';

import spinnerImg from '../../assets/loading.gif';

import './styles.scss';

const Spinner = ({ text }) => (
  <div className='spinner'>
    <img src={spinnerImg} className='spinner__img' />
    <div className='spinner__text'>{text}</div>
  </div>
);

Spinner.defaultProps = {
  text: 'Getting information...',
}

Spinner.propTypes = {
  text: PropTypes.string,
};

export default Spinner;

