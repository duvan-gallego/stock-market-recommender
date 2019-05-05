import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const BoxInfo = ({
  highlight,
  icon,
  text,
  title,
}) => (
    <div className='boxInfo'>
      {title}
      <div className='boxInfo__detail'>
        {icon &&
          <img src={icon} className='boxInfo__detail-img' alt={title} />
        }
        <div className={cn('boxInfo__detail-text', { 'boxInfo__detail-text--highlight': highlight })}>
          {text}
        </div>
      </div>
    </div>
  );

BoxInfo.defaultProps = {
  highlight: false,
}

BoxInfo.propTypes = {
  highlight: PropTypes.bool,
  icon: PropTypes.any,
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
};

export default BoxInfo;




