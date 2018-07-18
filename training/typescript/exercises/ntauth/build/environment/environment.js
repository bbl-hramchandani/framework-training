"use strict";
/*
* This configuration file holds the credentials needed to inquiry the LDAP service
* and other configurations needed by the application.
*
* Author: EyC
* Date:   May 30 2018
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    logDirectory: 'logs',
    development: true,
    ldapConfig: {
        url: 'ldap://192.168.101.99',
        baseDN: 'dc=testfbe,dc=com',
        username: 'ibtst3@testfbe.com',
        password: 'P@ss54321'
    },
    OK_MESSAGE: { status: 0, message: "ok" },
    INVALID_CREDENTIALS: { status: -100, message: "Invalid Credentials" },
    UNAUTHORIZED_USE: { status: -101, message: "You cannot access this application" }
};
