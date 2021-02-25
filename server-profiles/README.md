# Overview

This directory contains server profiles for PingDirectory and PingDataGovernance
to make it easier to demonstrate the capabilities of these products.

# What Do You Get?

PingDirectory will be configured with:
* 1000 sample users of the `user.#` convention 
* 1000 other users of a `json.user.#` convention *
* A small number of patients under `ou=patients,dc=example,dc=com`
* A small number of companies and their users under `ou=customers,dc=example,dc=com`
* For each company, a group of admins at `cn=COMPANY Admins,ou=COMPANY,ou=customers,dc=example,dc=com`
* A base entry for groups at `ou=groups,dc=example,dc=com`
* Delegated Admin (version 4.4) at path `/delegator` **
* Delegated Admin Resource Types for users, patients, customer users, companies, admin groups, and groups
* Delegated Admin Rights for `user.0` to do anything and everything to all resource types
* Delegated Admin Rights for each group of `cn=COMPANY Admins` to do anything and everything their customer users
* Two consent definitions `share-call-history` and `share-health-treatment-plan`
* Consent API with unprivileged/user OAuth scope `urn:pingdirectory:consent`
* Consent API service account (i.e. basic auth) `Consent Admin` (password `Consent Admin`)
* Privacy Dashboard at path `/privacy-dashboard` **
* Privacy Dashboard supports fine-grained consent for `share-call-history` and `share-health-treatment-plan`
* Mock Access Token Validator with Identity Mapper that matches the `sub` claim to `uid` attribute
* JWT Validator with Identity Mapper that matches the `email` claim to `mail` attribute
* PingFederate Validator and Identity Mapper that matches the `email` claim to `mail` attribute

PingDataGovernance will be configured with:
* API Gateway endpoints mapping various `/open-banking/v2.0` API to [the mock ASPSP's](https://github.com/babbtx/mock-simple-aspsp) `/OpenBanking/v2`
* SCIM pass-through to sample users in PingDirectory
* Mock Access Token Validator with Token Resource Lookup Method that matches the `sub` claim to SCIM `uid` attribute
* JWT Validator with Token Resource Lookup Method that matches the `email` claim to the SCIM `mail` attribute

Policy Admin GUI will be configured with:
* Demo authentication
* Demo policies for and Trust Framework for enforcing consent-authorized access to `/open-banking/v2.0/accounts`

\* "JSON users" have a `telephoneJson` multivalued JSON attribute.<br>
\** Delegated Admin and the Privacy Dashboard require PingFederate and/or PingOne for login. More information below.<br>

# Configuration

These server profiles are more easily configured through the 
Docker [project](https://gitlab.corp.pingidentity.com/davidbabbitt/pingdata-lab-docker)
or the Ansible [project](https://gitlab.corp.pingidentity.com/davidbabbitt/pingdata-lab-ansible) 
that consume them.

Most noteably, this project does not contain an OAuth server, even though they
depend on one for Delegated Admin and the Privacy Dashboard. You can use my
PingFederate (you may need to ask me for help) or your own PingFederate or PingOne.

Those projects will supply values for the following server profile variables:

* `PING_LOCAL_HOST_NAME` - hostname for each server instance
* `CN_ROOT_PASSWORD` - administrator password
* `PD_LDAP_PORT` - port for LDAP connections to PingDirectory
* `PD_LDAPS_PORT` - port for LDAPS connections to PingDirectory
* `PD_HTTP_PORT` - port for HTTP connections to PingDirectory
* `PD_HTTPS_PORT` - port for HTTPS connections to PingDirectory
* `PDG_LDAP_PORT` - port for LDAP (management API) of PingDataGovernance
* `PDG_LDAPS_PORT` - port for LDAPS (management API) of PingDataGovernance
* `PDG_HTTPS_PORT` - port for HTTPS connections to PingDataGovernance
* `PAP_HTTPS_PORT` - port for HTTPS connections to PingDataGovernance Policy Admin GUI
* `PD_INTERNAL_HOSTNAME` - hostname that the other servers use to talk to PingDirectory
* `PAP_INTERNAL_HOSTNAME` - hostname that the other servers use to talk to PingDataGovernance-PAP
* `PF_EXTERNAL_HOSTNAME` - hostname for PingFederate, used by Delegated Admin
* `PF_HTTPS_PORT` - runtime https port for PingFederate, used by Delegated Admin
* `OAUTH2_SERVER_BASE_URL` - OAuth server base URL, like https://pf.example.com
* `OAUTH2_JWKS_URL` - JWKS endpoint for *OAuth* (not OIDC)
* `OAUTH2_AUTHORIZATION_URL` - OAuth login URL, used by Delegated Admin and Privacy Dashboard
* `PRIVACY_DASHBOARD_CLIENT_ID` - Client identifier configured in the OAuth server for the Privacy Dashboard
* `OPEN_BANKING_BASE_URL` - Base URL for the mock ASPSP, like `https://babbtx-aspsp.herokuapp.com`