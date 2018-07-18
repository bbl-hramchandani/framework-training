"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActiveDirectory = require("activedirectory");
const environment_1 = require("../environment/environment");
class LDAP {
    constructor() {
        this.username = 'ibtst3@testfbe.com';
        this.password = 'P@ss54321';
        this.group = 'BBANKOFFICE';
        this.retObj = environment_1.environment.INVALID_CREDENTIALS;
        this.ad = new ActiveDirectory(environment_1.environment.ldapConfig);
    }
    isfinduser() {
        return new Promise((resolve, reject) => {
            this.ad.findUser(this.username, (err, retuser) => {
                if (retuser) {
                    console.log(retuser.displayName);
                    this.retObj = environment_1.environment.OK_MESSAGE;
                    this.retObj.displayName = retuser.displayName;
                    resolve(true);
                }
                else {
                    reject(false);
                }
            });
        });
    }
    ismemberofuser() {
        return new Promise((resolve, reject) => {
            this.ad.isUserMemberOf(this.username, this.group, (err, isMember) => {
                if (isMember) {
                    resolve(true);
                }
                else {
                    this.retObj = environment_1.environment.UNAUTHORIZED_USE;
                    reject(false);
                }
            });
        });
    }
    authenticateuser() {
        return new Promise((resolve, reject) => {
            this.ad.authenticate(this.username, this.password, (err, auth) => {
                if (err === null && auth === true) {
                    console.log("second function - in authenticate auth and err is good");
                    resolve(true);
                }
                else {
                    console.log("second function - in authenticate auth and error is not good");
                    reject(false);
                }
            });
        });
    }
    authenticate(username, password, group) {
        console.log('in auth');
        this.username = username;
        this.password = password;
        this.group = group;
        this.retObj = environment_1.environment.INVALID_CREDENTIALS;
        return new Promise((resolve, reject) => {
            this.authenticateuser().then(result => {
                console.log("first function - authenticate user result is ", result);
                this.ismemberofuser().then(result2 => {
                    if (result2) {
                        this.isfinduser().then(result3 => {
                            if (result3) {
                                resolve(this.retObj);
                            }
                            else {
                                reject(this.retObj);
                            }
                        }).catch(() => reject(this.retObj));
                    }
                }).catch(() => reject(this.retObj));
            }).catch((err) => reject(this.retObj));
        });
    }
    oldauthenticate(username, password, group) {
        var retObj = {};
        retObj = environment_1.environment.INVALID_CREDENTIALS;
        this.ad.authenticate(username, password, (err, auth) => {
            if (auth) {
                this.ad.isUserMemberOf(username, group, (err, isMember) => {
                    if (isMember) {
                        this.ad.findUser(username, (err, retuser) => {
                            if (retuser) {
                                console.log(retuser.displayName);
                                retObj = environment_1.environment.OK_MESSAGE;
                                retObj.displayName = retuser.displayName;
                            }
                        });
                    }
                    else {
                        retObj = environment_1.environment.UNAUTHORIZED_USE;
                    }
                });
            }
        });
        console.log(retObj);
        return retObj;
    }
}
exports.LDAP = LDAP;
