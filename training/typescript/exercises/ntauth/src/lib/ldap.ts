import * as  ActiveDirectory from 'activedirectory';
import { environment } from '../environment/environment';
 
interface user {
       status: number,
       message: string,
       displayName? : string      
}

export class LDAP {

    username = 'ibtst3@testfbe.com';
    password = 'P@ss54321';
    group = 'BBANKOFFICE';
    retObj : user = environment.INVALID_CREDENTIALS;       

    public ad : ActiveDirectory;
 
    constructor() {
        this.ad = new ActiveDirectory(environment.ldapConfig);
    }

    public isfinduser(): Promise<any>  {

        return new Promise ( (resolve,reject) => {

            this.ad.findUser(this.username, (err,retuser) => {
                if (retuser) {
                    console.log(retuser.displayName);
                    this.retObj = environment.OK_MESSAGE;
                    this.retObj.displayName = retuser.displayName;
                    resolve(true);
                } else {
                    reject(false);
                }
            });

        })

    }
    
    public ismemberofuser(): Promise<any> {

        return new Promise ( (resolve,reject) => {
            this.ad.isUserMemberOf(this.username, this.group, (err, isMember) => {
                if (isMember) {
                    resolve(true)
                } else {
                    this.retObj = environment.UNAUTHORIZED_USE;
                    reject(false)
                }
            });
        })

    }

    public authenticateuser(): Promise<any> {

        return new Promise ( (resolve,reject) => {

            this.ad.authenticate(this.username, this.password, (err,auth) =>{
                if (err === null && auth === true) {
                    console.log("second function - in authenticate auth and err is good");
                    resolve(true)                    
                } else {
                    console.log("second function - in authenticate auth and error is not good");
                    reject(false);
                }
            });            

        })
    }

    public authenticate(username:string,password:string,group:string): Promise<user> {

        console.log('in auth');
        this.username = username;
        this.password = password;
        this.group = group;                
        this.retObj = environment.INVALID_CREDENTIALS;

        return new Promise ( (resolve,reject) => {

            this.authenticateuser().then (
                result => {
                    console.log("first function - authenticate user result is ", result);
                        this.ismemberofuser().then (
                            result2 => {
                                if (result2) {
                                    this.isfinduser().then (
                                        result3 => {
                                            if (result3) {
                                                resolve(this.retObj);
                                            } else {
                                                reject(this.retObj);
                                            }
                                        }
                                    ).catch(() => reject(this.retObj));  
                                }
                            }
                        ).catch(() => reject(this.retObj));  
                 }, 
            ).catch( (err) => reject(this.retObj));            
            
        });

    }

    public oldauthenticate(username:string,password:string,group:string) {

        var retObj : user =  <null>{};

        retObj = environment.INVALID_CREDENTIALS;        

        this.ad.authenticate(username, password, (err,auth) =>{
            if (auth) {
                this.ad.isUserMemberOf(username, group, (err, isMember) => {
                    if (isMember) {

                        this.ad.findUser(username, (err,retuser) => {
     
                             if (retuser) {
                                 console.log(retuser.displayName);
                                 retObj = environment.OK_MESSAGE;
                                 retObj.displayName = retuser.displayName;
                             }
                        });
                     
                    }
                    else {
                         retObj= environment.UNAUTHORIZED_USE;
                     }
                });
            }
        });
       console.log(retObj);
       return retObj;
    }    
    
}