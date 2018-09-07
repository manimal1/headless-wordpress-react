import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Paper, Tabs, Tab } from 'mui-components';
import './PagesNav.css';

class PagesNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const { pages = [] } = this.props;
    const { value } = this.state;

    return (
      <Paper className="">
        <Tabs
          value={value}
          name="tabs"
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          className="pages-nav"
        >
          {pages &&
            pages.map((page) => {
              const tab = (
                <Tab
                  key={page.id}
                  label={page.title.rendered}
                  component={Link}
                  to={`/${page.slug}`}
                  className="pages-nav-link"
                />
              );
              return tab;
            })
          }
        </Tabs>
      </Paper>
    );
  }
}

PagesNav.propTypes = {
  pages: Proptypes.array,
};

PagesNav.defaultProps = {
  pages: [],
};

export default PagesNav;
