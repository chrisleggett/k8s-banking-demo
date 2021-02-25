/*
 * This file can be used to override any environment vars from compile time.
 *
 * To use:
 *   $ cp example.config.js config.js
 *   $ vi config.js
 *
 * And customize for your deployment environment.
 *
 */
(function(window) {
  window.RuntimeConfig = {};

  /*
   * If you are deploying this app on your PingDirectory,
   * like in the `webapps` directory,
   * use this value instead.
   */
  window.RuntimeConfig.PD_HOST_PORT = window.location.origin;

  /*
   * The https URL where the privacy dashboard will redirect for login.
   */
  window.RuntimeConfig.OAUTH2_AUTHORIZATION_URL = "${OAUTH2_AUTHORIZATION_URL}";

  /*
   * The client id the privacy dashboard will use to identify itself to the authorization server.
   */
  window.RuntimeConfig.OAUTH2_CLIENT_ID = "${PRIVACY_DASHBOARD_CLIENT_ID}";

  /*
   * URL for mock bank API
   */
  window.RuntimeConfig.OPEN_BANKING_ACCOUNTS_URL = "${OPEN_BANKING_ACCOUNTS_URL}";
})(window);
