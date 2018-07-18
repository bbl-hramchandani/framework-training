"use strict";
/*
 * This is the main bootstraper for the microservice
 * Author: EyC
 * Date: May 31 2018
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const winston = require("winston");
const route_constants_1 = require("./routes/route.constants");
const environment_1 = require("./environment/environment");
const ldap_1 = require("./lib/ldap");
class App {
    constructor() {
        this.ldap = new ldap_1.LDAP();
        //Create a reference to the express() object 
        this.authService = express();
        //Define the middlewares that are triggered Application wide and available to every route end point
        this.authService.use(cors());
        this.authService.use(bodyParser.urlencoded({ extended: false }));
        this.authService.use(bodyParser.json());
        //Define our logger object created from winston class
        const tsFormat = () => (new Date()).toLocaleTimeString();
        this.logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({
                    timestamp: tsFormat,
                    colorize: true,
                    level: 'info'
                }),
                new (winston.transports.File)({
                    filename: `${environment_1.environment.logDirectory}/ntauth.log`,
                    timestamp: tsFormat,
                    level: environment_1.environment.development === true ? 'debug' : 'info'
                })
            ]
        });
        //lets mount the auth route from here
        const mountedRoute = express.Router();
        mountedRoute.post(route_constants_1.route.AUTHENTICATE, (req, resp) => {
            this.logger.info("Receiving Authentiction request for user " + req.body.username);
            this.ldap.authenticate(req.body.username, req.body.password, req.body.group).then(result => {
                resp.json({ result });
            }, err => {
                resp.json({ err });
            });
            /*resp.json(
                  this.ldap.authenticate(req.body.username,req.body.password,req.body.group)
            );*/
        });
        this.authService.use(mountedRoute);
    } //end of constructor()
} //end of class definition
exports.App = App;
exports.default = new App().authService;
