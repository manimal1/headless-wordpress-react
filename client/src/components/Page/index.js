import React from 'react';
import PropTypes from 'prop-types';
import ContentBlock from '../ContentBlock';
import PagesNav from '../PagesNav';
import Section from '../Section';
import './Page.css';

const Page = (props) => {
  const { page = {}, pages = [] } = props;

  return (
    <main>
      {page && page.title.rendered === 'Pages' &&
        <PagesNav {...{ pages }} />
      }
      <Section className="page">
        <h1>
          {page.title.rendered}
        </h1>
        <div className="page__content">
          <ContentBlock content={page.content.rendered}
        />
        </div>
      </Section>
    </main>
  );
};

Page.propTypes = {
  page: PropTypes.object,
  pages: PropTypes.array,
};

Page.defaultProps = {
  page: {},
  pages: [],
};

export default Page;
