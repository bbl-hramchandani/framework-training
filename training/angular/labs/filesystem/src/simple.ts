import * as fs from 'fs';

fs.readFile('./data/file.txt', 'utf8', (err, data)=> {

    if (err) throw err;
    console.log(data);

});

