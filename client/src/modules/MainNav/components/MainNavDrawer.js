import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SwipeableDrawer, List, Divider } from 'mui-components';
import './MainNavDrawer.css';

const MainNavDrawer = (props) => {
  const {
    mainNavMenu,
    activeNavLink,
    isNavDrawerOpen,
    fbAuthProvider,
    handleNavLinkClick,
    toggleNavDrawer,
  } = props;

  const renderNavMenu = () => { // eslint-disable-line arrow-body-style
    return mainNavMenu && mainNavMenu.length > 0
      ? mainNavMenu.map((item) => {
        const { slug } = item;
        const liClassName = (activeNavLink === slug) ? 'main-nav__drawer-item active' : 'main-nav__drawer-item';

        return (
          <li key={item.ID} className={liClassName}>
            <Link
              name={slug}
              to={`/${slug}`}
              className="main-nav__drawer-link"
              onClick={() => { handleNavLinkClick(slug); }}
            >
              <span className="main-nav__drawer-label">
                {item.title}
              </span>
            </Link>
            <Divider />
          </li>
        );
      })
      : (
        <div>
          No menu found
        </div>
      );
  };

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={isNavDrawerOpen}
        onClose={toggleNavDrawer}
        onOpen={toggleNavDrawer}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleNavDrawer}
          onKeyDown={toggleNavDrawer}
          className="main-nav__drawer"
        >
          <List className="main-nav__drawer-menu">
            <li className="main-nav__drawer-item">
              <Link
                name="home"
                to="/"
                className="main-nav__drawer-link"
              >
                <span className="main-nav__drawer-label">
                  App Logo
                </span>
              </Link>
              <Divider />
            </li>
            { renderNavMenu() }
            <li className="main-nav__drawer-item">
              <Link
                name="home"
                to="/"
                className="main-nav__drawer-link"
              >
                <span className="main-nav__drawer-label">
                  { fbAuthProvider }
                </span>
              </Link>
              <Divider />
            </li>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

MainNavDrawer.propTypes = {
  mainNavMenu: PropTypes.array,
  activeNavLink: PropTypes.string,
  isNavDrawerOpen: PropTypes.bool,
  fbAuthProvider: PropTypes.element.isRequired,
  handleNavLinkClick: PropTypes.func,
  toggleNavDrawer: PropTypes.func,
};

MainNavDrawer.defaultProps = {
  mainNavMenu: [],
  activeNavLink: '',
  isNavDrawerOpen: false,
  handleNavLinkClick: () => undefined,
  toggleNavDrawer: () => undefined,
};

export default MainNavDrawer;
