import * as fs from 'fs';

let data = '';

var readStream = fs.createReadStream('./data/file.txt', {encoding: 'utf8', highWaterMark: 128 * 1024});

readStream.on('data', (chunk) => {
                console.log("Hi. we received a chunk..." + chunk);
                data += chunk;
            })
          .on('end', () => {
                console.log("Hi. this is the end...");
                console.log(data)
            })
          .on('error', (err) => {console.log(err)} );

