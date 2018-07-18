/*
 * This is the main bootstraper for the microservice 
 * Author: EyC
 * Date: May 31 2018
 *
*/

import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as winston from 'winston';

import { route  } from './routes/route.constants';
import { environment }     from './environment/environment';
import { LDAP } from './lib/ldap';
 
export class App {

    public authService : any;
    private logger    : any;
    private ldap       : LDAP = new LDAP();

    constructor() {

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
                  filename: `${environment.logDirectory}/ntauth.log`,
                  timestamp: tsFormat,
                  level: environment.development === true ? 'debug' : 'info'
            })
        ]
        });

         //lets mount the auth route from here
        const mountedRoute = express.Router();

         mountedRoute.post(route.AUTHENTICATE,(req,resp) => {
 
                this.logger.info("Receiving Authentiction request for user " + req.body.username); 
                
                this.ldap.authenticate(req.body.username,req.body.password,req.body.group).then ( 
                    result => {
                        resp.json({result});
                        },  
                    err => {
                        resp.json({err});
                    })
                ;
                
                /*resp.json(
                      this.ldap.authenticate(req.body.username,req.body.password,req.body.group)
                );*/
         });

        this.authService.use(mountedRoute);

    }  //end of constructor()
    
}  //end of class definition
export default new App().authService;
