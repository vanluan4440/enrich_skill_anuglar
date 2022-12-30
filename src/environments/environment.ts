// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
export const domain = {
  url: 'https://accounts.spotify.com',
  api: 'https://api.spotify.com',
  domainIframe : 'https://open.spotify.com/oembed',
  domainOpenSpotify: 'https://open.spotify.com/'
}

export const api = {
  token: '/api/token',
  profile: '/v1/me',
  playlist: '/v1/me/playlists',
  playlists: '/v1/playlists',
  playlist_all: '/v1/playlists',
  search: '/v1/search',
  ablum : '/v1/albums'
}

export const spotify = {
  response_type: 'code',
  client_id: 'bef562d836114d5eaea732e15e1b4b4d',
  scope: 'user-read-private user-read-email',
  redirect_uri_login: 'https://localhost:4200/login',
  state: '123456789Xxx',
  client_secret: 'f0f804dbec4c43a38bfc8583b33f6614',
  grant_type: 'authorization_code',
  redirect_uri_landing: 'http://localhost:4200'
}
