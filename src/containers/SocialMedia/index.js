import React from 'react';
import PropTypes from 'prop-types';
import BoxBig from '../../components/BoxBig';
import Button from '../../components/Button';
import SocialMediaMessage from '../../components/SocialMediaMessage';

import {
  RECOMMENDATIONS_SOCIAL_MEDIA_TITLE,
  RECOMMENDATIONS_GET_MORE,
} from '../../messages';

import './styles.scss';

const SocialMedia = ({ messages, getMoreMessages }) => (
  <BoxBig
    title={RECOMMENDATIONS_SOCIAL_MEDIA_TITLE}
  >
    <>
      {messages.map((message, i) => <SocialMediaMessage {...message} key={i} />)}

      {getMoreMessages &&

        <Button text={RECOMMENDATIONS_GET_MORE} small />
      }
    </>
  </BoxBig>
);

SocialMedia.defaultProps = {
  getMoreMessages: true,
  messages: [
    {
      socialNetwork: 'Twitter',
      message: 'We are actually talking about $GOO message number 0'
    },
    {
      socialNetwork: 'Facebook',
      message: 'We are actually talking about $GOO message number 1'
    },
    /*{
      socialNetwork: 'Facebook',
      message: 'We are actually talking about $GOO message number 2'
    },
    {
      socialNetwork: 'Facebook',
      message: 'We are actually talking about $GOO message number 3'
    },
    {
      socialNetwork: 'Facebook',
      message: 'We are actually talking about $GOO message number 3'
    },
    {
      socialNetwork: 'Facebook',
      message: 'We are actually talking about $GOO message number 3'
    } */
  ],
}

SocialMedia.propTypes = {
  getMoreMessages: PropTypes.bool,
  messages: PropTypes.array,
};

export default SocialMedia;




