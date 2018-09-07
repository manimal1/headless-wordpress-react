// Standard WP-JSON API endpoints
export const WP_BASE_URL = '/wp-json/wp/v2';
export const WP_MAIN_NAV_MENU = '/wp-json/menus/v1/menus/top';
export const WP_MEDIA = `${WP_BASE_URL}/media`;
export const WP_PAGES = `${WP_BASE_URL}/pages`;
export const WP_POSTS = `${WP_BASE_URL}/posts`;
export const WP_USERS = `${WP_BASE_URL}/users`;

// JSON-API plugin endpoints
export const WP_GENERATE_COOKIE = '/api/user/generate_auth_cookie';
export const WP_NONCE_REGISTER = '/api/get_nonce/?controller=user&method=register';
export const WP_NONCE_COOKIE = '/api/get_nonce/?controller=user&method=generate_auth_cookie';
export const WP_REGISTER = '/api/user/register';
export const WP_RETRIEVE_PASSWORD = '/api/user/retrieve_password';
export const WP_VALIDATE_COOKIE = '/api/user/validate_auth_cookie';

// JWT-AUTH plugin endpoints
// export const WP_AUTH_URL = '/wp-json/jwt-auth/v1';
