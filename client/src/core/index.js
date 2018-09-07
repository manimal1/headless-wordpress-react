import WPAPI from 'wpapi';

/* eslint-disable import/prefer-default-export */
export const wp = new WPAPI({ endpoint: 'http://localhost:8000/wp-json' });
/* eslint-enable */
