import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  fetchPages,
  fetchPostsData,
  fetchMainNavMenu,
} from './actions';
import { MainNav } from './modules';
import {
  Home,
  AppLogin,
  FacebookLogin,
  Profile,
} from './containers';
import {
  PrivateRoute,
  Page,
  Post,
} from './components';

class App extends Component {
  componentDidMount() {
    // @TODO: compbine these into one call so that app is only rendered once
    const {
      /* eslint-disable no-shadow */
      fetchMainNavMenu,
      fetchPages,
      fetchPostsData,
      /* eslint-enable */
    } = this.props;
    fetchMainNavMenu();
    fetchPages();
    fetchPostsData();
  }

  render() {
    const { pages = [], postsData = {}, mainNavMenu = [] } = this.props;
    const posts = postsData !== null ? postsData.posts : [];

    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <div className="app">
            <MainNav
              mainNavMenu={mainNavMenu}
              fbAuthProvider={<FacebookLogin />}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={AppLogin} />
            <PrivateRoute exact path="/profile" component={Profile} />

            {pages && pages.length > 0
              ? pages.map(page => (
                <Route
                  exact
                  path={`/${page.slug}`}
                  key={page.id}
                  render={() => <Page {...{ page, pages }} />}
                />
              )) : <div />
            }
            {posts && posts.length > 0
              ? posts.map(post => (
                <Route
                  exact
                  path={`/${post.slug}`}
                  key={post.id}
                  render={() => <Post {...{ post }} />}
                />
              )) : <div />
            }
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const noop = () => undefined;
App.propTypes = {
  fetchMainNavMenu: PropTypes.func,
  fetchPages: PropTypes.func,
  fetchPostsData: PropTypes.func,
  mainNavMenu: PropTypes.array,
  pages: PropTypes.array,
  postsData: PropTypes.object,
};


App.defaultProps = {
  fetchMainNavMenu: noop,
  fetchPages: noop,
  fetchPostsData: noop,
  mainNavMenu: [],
  pages: [],
  postsData: {},
};

function mapStateToProps({ mainNavMenu, pages, postsData }) {
  return { mainNavMenu, pages, postsData };
}

export default connect(
  mapStateToProps,
  { fetchMainNavMenu, fetchPages, fetchPostsData },
)(App);
