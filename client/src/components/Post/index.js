import React from 'react';
import ContentBlock from '../ContentBlock';
import FeaturedMedia from '../FeaturedMedia';
import './Post.css';

const Post = (props) => {
  const { post } = props || {};

  return (
    <main className="post">
      <section className="container">
        {post.FeaturedMedia &&
          <FeaturedMedia media={FeaturedMedia} />
        }
        <h1>
          {post.title.rendered}
        </h1>
        <div className="post__content">
          <ContentBlock content={post.content.rendered} />
        </div>
      </section>
    </main>
  );
};

export default Post;
