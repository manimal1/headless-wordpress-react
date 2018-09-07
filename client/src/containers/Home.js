import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Headline } from 'mui-components';
import { Pagination } from '../modules';
import { PostFeed, Section } from '../components';

class Home extends Component {
  handleFilter = () => {
    // @TODO: create filter bar functionality
  }

  render() {
    const { postsData = {} } = this.props;
    const posts = postsData === null ? [] : postsData.posts;

    return (
      <main>
        <Section>
          <Headline>
            Welcome to the Home Page!
          </Headline>
          <p>
            Above the title is a list of ALL available pages,
             even though they may not all be included in the Main Nav Menu.
          </p>
          <p>
            Below are all avialbe posts, which load 10 at a time!
          </p>
          <PostFeed {...{ posts }} />
          <Pagination />
        </Section>
      </main>
    );
  }
}

Home.propTypes = {
  postsData: PropTypes.object,
};

Home.defaultProps = {
  postsData: {},
};

function mapStateToProps({ postsData }) {
  return { postsData };
}

const ConnectedHome = connect(mapStateToProps)(Home);

export default ConnectedHome;
