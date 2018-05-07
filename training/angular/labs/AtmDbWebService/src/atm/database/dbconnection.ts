import { MongoClient, FilterQuery } from 'mongodb';

export class DbConnection {

    private user          : string = "hramchandani";
    private password      : string = "hramchandani";
    private remotedb            : string = "angulartraining";
    private host          : string = "ds215370.mlab.com";
    private port          : string = "15370";
    private autoReconnect : object =  {auto_reconnect: true};

    private conn : any;
    private  db  : any;

    constructor() { }
      
    async  connectDb() : Promise<any> {

        let dbURI  = `mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.remotedb}`;
        let resp =  await MongoClient.connect(dbURI,this.autoReconnect);
        this.db = resp.db(this.remotedb);
        this.conn =  resp;
             
        return this.db;

    }
       
    findOne(doc:string, query : FilterQuery<any>) : Promise<any> {    

        return new Promise ( (resolve,reject) => {

            this.db.collection(doc).findOne(query).then( (resp:any) => {
                if (resp != null) { 
                    resolve(resp);
                } else {
                    reject('Account not found.');
                }
            }, (err:any) => { reject('Account error'); });

        });

     }

    async find(doc:string, query : FilterQuery<any>) : Promise<any> {    
        return await  this.db.collection(doc).find(query).toArray();             
    }  

    async updateOne(doc:string, query: FilterQuery<any>, argValue :any ) : Promise<any> {
       return await this.db.collection(doc).updateOne(query,{ $set : argValue });
    }

    async deleteOne(doc:string, query: FilterQuery<any>) : Promise<any> {
        return await this.db.collection(doc).updateOne(query);
    }

    async insertOne(doc:string, record : object ) : Promise<any> {
        return await this.db.collection(doc).insertOne(record);
    }

}
