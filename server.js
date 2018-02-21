//requires
var express = require('express');
var config = require('./setup/config/config.js')

var app = express();
app.set('port', process.env.PORT || 9000);  //listen on the port
app = config(app);


var server = app.listen(app.get('port'),function(){
	console.log('Server up: http://127.0.0.1:'+ app.get('port'));
}); 
process.on('unhandledRejection', (reason,promise) => {
    console.log(promise);
});