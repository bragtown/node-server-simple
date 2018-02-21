var express = require('express')
var path = require('path');
module.exports.initialize = function(app){
    var router = express.Router();

    router.use(express.static(path.join(__dirname, '../../public/'))) 
    app.use(router)
    
    var example = require('./example')
    app.use('/example',example);
    

}