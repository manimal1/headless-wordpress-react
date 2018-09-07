import React from 'react';
import PropTypes from 'prop-types';

const FacebookButton = ({ children }) => (
  <button type="button" className="btn btn-primary">
    <div>
      {children}
    </div>
  </button>
);

FacebookButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FacebookButton;
