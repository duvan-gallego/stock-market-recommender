import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoxBig from '../../components/BoxBig';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import SocialMediaMessage from '../../components/SocialMediaMessage';

import { getSMMessages } from './actions';

import {
  RECOMMENDATIONS_SOCIAL_MEDIA_TITLE,
  RECOMMENDATIONS_GET_MORE,
} from '../../messages';

import './styles.scss';

const SocialMedia = ({
  getSMMessages: getSMMessagesAction,
  recommendations,
  socialMedia,
}) => {

  const [moreMessages, setMoreMessages] = useState(true);
  const { stockSymbol, socialNetwork, countOfSocialMediaPost } = recommendations;

  const onClickHandler = () => {
    setMoreMessages(false);
    getSMMessagesAction(stockSymbol, socialNetwork, countOfSocialMediaPost);
  }

  const messagesToShow = moreMessages ? recommendations.socialMediaMessages : socialMedia.messages;

  return (
    <BoxBig
      title={RECOMMENDATIONS_SOCIAL_MEDIA_TITLE}
    >
      {socialMedia.isFetching
        ? <Spinner className='socialMedia__spinner' />
        : (
          // TODO: Add pagination to not load all messages
          <>
            {messagesToShow.map((message, i) => <SocialMediaMessage {...message} key={i} />)}
            {moreMessages &&
              <Button
                onClick={onClickHandler}
                text={RECOMMENDATIONS_GET_MORE}
                small
              />
            }
          </>
        )
      }
    </BoxBig>
  )
};

SocialMedia.defaultProps = {
  getMoreMessages: true
}

SocialMedia.propTypes = {
  getMoreMessages: PropTypes.bool,
};

const mapStateToProps = ({ recommendations, socialMedia }) => ({ recommendations, socialMedia });

export default connect(mapStateToProps, { getSMMessages })(SocialMedia);




