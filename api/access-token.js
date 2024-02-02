/* ---------------- Access Token ---------------- */
// [Documentation]: https://developer.spotify.com/documentation/web-api/concepts/access-token

// The access token is a string which contains the credentials and permissions
// that can be used to access a given resource (e.g artists, albums or tracks) or user's data (e.g your profile or your playlists).

// Performs the API call to the Get Current User's Profile endpoint to retrieve the user profile related information:
async function getProfile(accessToken) {
  var accessToken = localStorage.getItem("access_token");

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + accessToken, // Valid access token following the format: Bearer <Access Token>. (*)
    },
  });

  const data = await response.json();
  return data;
}

/* NOTE */
// The access token is valid for 1 hour (3600 seconds). After that time, the token expires and you need to request a new one.
