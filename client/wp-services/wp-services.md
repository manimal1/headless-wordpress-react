# 4. WordPress Services

This is where we've placed all the API calls to the WordPress headless API.

We are using axios for our http calls. 

It should:
- Be self-contained
- Only include calls to the WordPress API

It should NOT: 
- Make calls to other services
- Contain Redux actions or services or other client-side functionality

WordPress plugin dependencies include:
- ACF-TO-WP-API
- ADVANCED-CUSTOM-FIELDS
- JSON-API
- JSON-API-USER
- WP-REST-API-V2-MENUS


## JWT Authentication Example

If you are interested in using JWT authentication instead of cookies, this is an example of how you could log in using the JWT-Authentication-for-wp-rest-api plugin:

```js
return axios({
  method: 'post',
  url: `${WP_AUTH_URL}/token`,
  headers: {'Content-Type': 'application/json'},
  data: {
    username: username,
    password: password
  }
})
.then(res => {
  userStore(res.data.token);
})
.catch(err => log(err));

export const userStore = (value) => {
  const tokenKey = 'Wp-LoginToken';
  if (value === undefined) {
    return sessionStorage.getItem(tokenKey);
  }

  sessionStorage.setItem(tokenKey, value);
}
```

## FB User login response example

This is how the response object should be structured
```json
  {
    "status": "ok",
    "msg": "user logged in.",
    "wp_user_id": 1,
    "cookie": "name|1234567890|IDgoesHere|longStringHere",
    "user_login": "name"
  }
```
