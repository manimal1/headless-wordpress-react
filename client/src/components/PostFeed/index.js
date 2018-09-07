import React from 'react';
import PostPreview from '../PostPreview';

const PostFeed = (props) => {
  const { posts } = props || [];
  return (
    <div className="post-feed">
      {posts.length > 0 &&
        posts.map(post => <PostPreview key={post.id} post={post} />)
      }
    </div>
  );
};

export default PostFeed;
