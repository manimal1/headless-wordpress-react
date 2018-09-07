import axios from 'axios';
import { WP_MEDIA } from '../wp-types';

const fetchMediaThumbnail = async (size, mediaNumber) => {
  const getThumbnail = await axios.get(`${WP_MEDIA}/${mediaNumber}`)
    .then((res) => {
      let endpoint;

      switch (size) {
        case 'medium_large':
          endpoint = res.data.media_details.sizes.medium_large.source_url;
          break;
        default:
          endpoint = res.data.media_details.sizes.medium.source_url;
      }

      return endpoint;
    });

  return getThumbnail;
};

export default fetchMediaThumbnail;
