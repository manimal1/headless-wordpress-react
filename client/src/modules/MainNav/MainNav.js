import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'cookies-js';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  MenuIcon,
  AccountCircle,
} from 'mui-components';
import MainNavDrawer from './components';
import { userActions } from '../../actions';
import './MainNav.css';

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavLink: '',
      anchorEl: null,
      isNavDrawerOpen: false,
    };
  }

  handleAccountMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleNavDrawer = () => {
    const { isNavDrawerOpen } = this.state;
    this.setState({
      isNavDrawerOpen: !isNavDrawerOpen,
    });
  };

  handleNavLinkClick = (slug) => {
    this.setState({
      activeNavLink: slug,
    });
  }

  render() {
    const {
      handleLogout,
      fbAuthProvider,
      mainNavMenu,
    } = this.props;
    const {
      anchorEl,
      isNavDrawerOpen,
      activeNavLink,
    } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    return (
      <nav className="main-nav">
        <AppBar position="fixed">
          <Toolbar className="main-nav__menu">
            <IconButton className="main-nav__menu-button" color="inherit" aria-label="Menu" onClick={this.toggleNavDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className="main-nav__menu-item">
              <Link to="/" className="main-nav__menu-link">
                Haven
              </Link>
            </Typography>
            {Cookies.get('Wp-UserLoggedInCookie') && (
              <div>
                <IconButton
                  aria-owns={isMenuOpen ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleAccountMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={isMenuOpen}
                  onClose={this.handleMenuClose}
                >
                  <MenuItem
                    component={Link}
                    to="/profile"
                    onClick={this.handleMenuClose}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    // @TODO: add account page and
                    to="/"
                    onClick={this.handleMenuClose}
                  >
                    My account
                  </MenuItem>
                  <MenuItem onClick={() => {
                    handleLogout();
                    this.handleMenuClose();
                  }}>
                    logout
                  </MenuItem>
                </Menu>
              </div>
            )}
            {!Cookies.get('Wp-UserLoggedInCookie') && (
              <Typography variant="title" color="inherit">
                <Link to="/login" className="main-nav__menu-item">
                  Login
                </Link>
              </Typography>
            )}
          </Toolbar>
        </AppBar>

        <MainNavDrawer {...{
          mainNavMenu,
          activeNavLink,
          isNavDrawerOpen,
          fbAuthProvider,
          handleNavLinkClick: this.handleNavLinkClick,
          toggleNavDrawer: this.toggleNavDrawer,
        }} />
      </nav>
    );
  }
}

MainNav.propTypes = {
  mainNavMenu: PropTypes.array,
  fbAuthProvider: PropTypes.object,
  handleLogout: PropTypes.func,
};

MainNav.defaultProps = {
  mainNavMenu: [],
  fbAuthProvider: {},
  handleLogout: () => undefined,
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(userActions.logout()),
});

function mapStateToProps({ userAuth }) {
  return { userAuth };
}

const ConnectedMainNav = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainNav);

export default ConnectedMainNav;
