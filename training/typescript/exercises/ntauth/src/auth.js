var ActiveDirectory = require('activedirectory');

var config = { url: 'ldap://192.168.101.99',
               baseDN: 'dc=testfbe,dc=com',
               username: 'ibtst3@testfbe.com',
	             password: 'P@ss54321'
              }
 
var ad = new ActiveDirectory(config);

var username = 'ibtst3@testfbe.com'; //ibtst2 and ibtst1
var password = 'P@ss54321';

ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
  
  if (auth) {
    console.log('Authenticated!',auth);
  }
  else {
    console.log('Authentication failed!');
  }
});


var groupName = 'BBANKOFFICE';
 
ad.isUserMemberOf(username, groupName, function(err, isMember) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }
 
  console.log(username + ' isMemberOf ' + groupName + ': ' + isMember);
});


ad.findUser(username, function(err, user) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }
 
  if (! user) console.log('User: ' + sAMAccountName + ' not found.');
  else console.log(JSON.stringify(user));
});
