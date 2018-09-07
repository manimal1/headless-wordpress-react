import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReadMoreButton = ({ slug }) => (
  <Link to={`/${slug}`}>
    Read More . . .
  </Link>
);

ReadMoreButton.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ReadMoreButton;
