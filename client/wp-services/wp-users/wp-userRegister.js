import axios from 'axios';
import Cookies from 'cookies-js';
import { WP_NONCE_REGISTER, WP_REGISTER } from '../wp-types';

export const registerUser = async (firstname, lastname, username, email, password) => {
  const nonce = await axios.get(WP_NONCE_REGISTER).then(res => res.data.nonce);
  const url = `${WP_REGISTER}/?username=${username}&email=${email}&nonce=${nonce}&display_name=${firstname}&first_name=${firstname}&last_name=${lastname}&notify=both&user_pass=${password}&insecure=cool`;

  return axios.post(url)
    .then((res) => {
      if (res.data.status === 'ok') {
        Cookies.set('Wp-UserLoggedInCookie', res.data.cookie);
      }
      const user = {
        ID: res.data.user_id,
        status: res.data.status,
        isRegistered: true,
      };

      return user;
    });
};

export const registerFbUser = async (accessToken) => {
  const handleFbLogin = await axios.post(`api/user/fb_connect/?access_token=${accessToken}&insecure=cool`)
    .then((res) => {
      if (res.data.status === 'ok') {
        Cookies.set('Wp-UserLoggedInCookie', res.data.cookie);
      }
      return res;
    });

  return handleFbLogin;
};
