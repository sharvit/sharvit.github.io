import React from 'react';
import PropTypes from 'prop-types';
import {
  Twitter,
  Facebook,
  Mail,
  Whatsapp,
  Telegram,
} from 'react-social-sharing';

const ShareButtons = ({ url }) => (
  <div>
    {[Twitter, Facebook, Mail, Whatsapp, Telegram].map((ShareButton, index) => (
      <ShareButton key={index} link={url} solid big />
    ))}
  </div>
);

ShareButtons.propTypes = {
  url: PropTypes.string,
};

ShareButtons.defaultProps = {
  url: '',
};

export default ShareButtons;
