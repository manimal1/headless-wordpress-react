import React from 'react';
import PropTypes from 'prop-types';

const ContentBlock = ({ content }) => (
  /* eslint-disable react/no-danger */
  <div
    className="content-block"
    dangerouslySetInnerHTML={{ __html: content || 'No HTML' }}
  />
  /* eslint-enable */
);

ContentBlock.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ContentBlock;
