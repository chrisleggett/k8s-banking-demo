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
   * The https host and port for your PingDirectory,
   * where the privacy dashboard will find the consent API.
   * Set this URL if you are deploying the privacy
   * dashboard to a different webserver. Don't forget to
   * fix the CORS policy on your PingDirectory consent API too.
   */
  // window.RuntimeConfig.PD_HOST_PORT = "https://pd.example.com:8443";

  /*
   * If you are deploying this app on your PingDirectory,
   * like in the `webapps` directory,
   * use this value instead.
   */
  // window.RuntimeConfig.PD_HOST_PORT = window.location.origin;

  /*
   * The https URL where the privacy dashboard will redirect for login.
   */
  // window.RuntimeConfig.OAUTH2_AUTHORIZATION_URL = "https://pf.example.com:9031/as/authorization.oauth2";

  /*
   * The client id the privacy dashboard will use to identify itself to the authorization server.
   */
  // window.RuntimeConfig.OAUTH2_CLIENT_ID = "privacy-dashboard";

  /*
   * The list of scopes to request from the authorization server.
   * Override this value if your fine-grained consent templates
   * require authorizations for other API calls.
   *
   * For example, add `accounts` to the space-delimited list
   * if you intend to demo the open-banking-account-request consent,
   * while will need authorization to list the user's bank
   * accounts for explicit authorization.
   */
  // window.RuntimeConfig.OAUTH2_SCOPES = "urn:pingdirectory:consent";

  /*
   * Other configuration options are available or required depending on the
   * fine-grained consents you want to support.
   */
  // window.RuntimeConfig.OPEN_BANKING_ACCOUNTS_URL = "https://example.com/api/open-banking/v1/accounts";
})(window);
