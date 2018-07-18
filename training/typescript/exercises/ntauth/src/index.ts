import App from './App';
  
App.listen(8080, (err:any) => {
    if (err) {
       return console.log(err);
    }
    else {
        return console.log('Auth Service running on port 8080');
    }
});
