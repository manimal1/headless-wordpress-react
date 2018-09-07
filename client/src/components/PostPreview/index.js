import React from 'react';
import './PostPreview.css';
import {
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  MoreVertIcon,
  FavoriteIcon,
  ShareIcon,
} from 'mui-components';
import ContentBlock from '../ContentBlock';
import { ReadMoreButton } from '../Buttons';
import utils from '../../utils';

const PostPreview = (props) => {
  const { post } = props || {};
  const { featuredMedia } = post || null;
  const author = post.authorInfo || {};
  let authorName;
  if (author.name) {
    authorName = utils.capitalize(author.name) || '';
  }

  return (
    <div className="post-preview">
      {/* {featuredMedia &&
        // @TODO: use constants to select from available sizes medium_large... grab from wp-api
        <FeaturedMedia media={featuredMedia} />
      } */}
      <Card className="">
        {post.authorInfo &&
          (
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className="" src={author.avatar_urls[96]} />
              }
              action={
                (
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                )
              }
              title={post.title.rendered}
              subheader={authorName}
            />
          )
        }
        {featuredMedia &&
          (
            <CardMedia
              className="post-preview__image"
              image={post.featuredMedia}
              title=""
            />
          )
        }
        <CardContent>
          <div className="post-preview__excerpt">
            <ContentBlock content={post.excerpt.rendered} />
          </div>
          <ReadMoreButton slug={post.slug} />
        </CardContent>
        <CardActions className="" disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostPreview;
