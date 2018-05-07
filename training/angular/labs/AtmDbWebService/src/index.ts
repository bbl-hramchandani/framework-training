import atmWebService from './App';

atmWebService.listen(3000, (err:any) => {
    
    if (err) {
       return console.log(err);
    } else {
        return console.log('Atm Web Service running on port 3000');
    }

});
