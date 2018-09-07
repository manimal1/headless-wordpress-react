import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsData } from '../../actions';
import './Pagination.css';

class Pagination extends Component {
  handlePageSelection = (selectedPage) => {
    const { fetchPostsData } = this.props; // eslint-disable-line no-shadow

    fetchPostsData(undefined, selectedPage);
  }

  render() {
    const { postsData } = this.props;
    const pagination = postsData !== null ? postsData.pagination : {};

    return (
      <article className="pagination">
        <span
          className="pagination-previous pagination-item"
          onClick={
            () => this.handlePageSelection(pagination.previousPage)
          }
          role="button"
          tabIndex="0"
          onKeyPress={this.handleKeyPress}
        >
          prev
        </span>
        <span>
          <ul className="pagination-post-numbers">
            {
              pagination && pagination.postData &&
                pagination.postData.map((post) => {
                  const item = (
                    <li key={post.id} className="pagination_post-number pagination-item">
                      <Link to={`/${post.slug}`}>
                        {post.number}
                      </Link>
                    </li>
                  );
                  return item;
                })
            }
          </ul>
        </span>
        <span
          className="pagination-next pagination-item"
          onClick={() => this.handlePageSelection(pagination.nextPage)}
          role="button"
          tabIndex="0"
          onKeyPress={this.handleKeyPress}
        >
          next
        </span>
      </article>
    );
  }
}

Pagination.propTypes = {
  postsData: PropTypes.object,
  fetchPostsData: PropTypes.func,
};

Pagination.defaultProps = {
  postsData: {},
  fetchPostsData: () => undefined,
};

function mapStateToProps({ postsData }) {
  return { postsData };
}

export default connect(
  mapStateToProps,
  { fetchPostsData },
)(Pagination);
