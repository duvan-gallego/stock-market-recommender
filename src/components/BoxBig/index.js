import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const BoxBig = ({ title, children }) => (
  <div className='boxBig'>
    {title}
    {children}
  </div>
);

BoxBig.defaultProps = {
  title: 'Default title',
}

BoxBig.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default BoxBig;




