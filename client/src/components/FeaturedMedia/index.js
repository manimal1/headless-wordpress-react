import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedMedia.scss';

const FeaturedMedia = ({ media }) => {
  if (media) {
    return (
      <div className="featured-media">
        <img src={media} alt="featured-media" />
      </div>
    );
  }

  return <div style={{ width: 'auto', paddingBottom: '100%', background: '#333' }} />;
};

FeaturedMedia.propTypes = {
  media: PropTypes.string.isRequired,
};

export default FeaturedMedia;
