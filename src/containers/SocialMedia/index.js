import React from 'react';
import BoxBig from '../../components/BoxBig';
import {
  RECOMMENDATIONS_SOCIAL_MEDIA_TITLE
} from '../../messages';

import './styles.scss';

const SocialMedia = () => (
  <BoxBig
    title={RECOMMENDATIONS_SOCIAL_MEDIA_TITLE}
  >
    <div>
      social media info...
    </div>
  </BoxBig>
);

/*SocialMedia.defaultProps = {
  highlight: false,
}

SocialMedia.propTypes = {
  highlight: PropTypes.bool,
  icon: PropTypes.any,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};*/

export default SocialMedia;




