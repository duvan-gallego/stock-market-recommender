import React from 'react';
import PropTypes from 'prop-types';

import quotationImg from '../../assets/quotation.png';
import twitterImg from '../../assets/twitter.svg';
import facebookImg from '../../assets/facebook.svg';

import './styles.scss';

const SocialMediaMessage = ({ message, socialNetwork }) => {
  const source = {
    'Twitter': twitterImg,
    'Facebook': facebookImg
  }

  return (
    <div className='socialMediaMessage'>
      <div className='socialMediaMessage__text'>
        <img src={quotationImg} className='socialMediaMessage__text-img' alt='quotation' />
        {message}
      </div>
      <img src={source[socialNetwork]} className='socialMediaMessage__img' alt={socialNetwork} />
    </div>
  );
}

SocialMediaMessage.propTypes = {
  message: PropTypes.string.isRequired,
  socialNetwork: PropTypes.oneOf(['Twitter', 'Facebook']),
};

export default SocialMediaMessage;

