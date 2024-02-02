/**
 * Function to store access token in localStorage (to persist the authentication information between pages)
 */
function storeAccessToken(access_token) {
  localStorage.setItem("access_token", access_token);
}

/**
 * Function to get access token from localStorage (to persist the authentication information between pages)
 */
function getAccessToken() {
  return localStorage.getItem("access_token");
}

/**
 * Function to obtain parameters from the hash of the URL
 * @return Object
 */
function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);

  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  return hashParams;
}
