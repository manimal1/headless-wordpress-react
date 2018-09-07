import React from 'react';
import './Section.css';

const Section = (props) => {
  const { children, className } = props;
  const section = (
    <section className={`section ${className}`}>
      {children}
    </section>
  );

  return section;
};

export default Section;
