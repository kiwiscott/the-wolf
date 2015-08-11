/// <reference path="typings/tsd.d.ts"/>

var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var environment = process.env.NODE_ENV || "DEVELOPMENT";
var morgan = require('morgan');
var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: '.data/log/access.log', category:'-sql'},
        { type: 'file', filename: '.data/log/sql.log', category: 'sql' }
    ]
});

if(environment == 'test'){ 
    log4js.setGlobalLogLevel(log4js.levels.ERROR);
}


var app = exports.app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup the logger
var applog = log4js.getLogger();
var httpLog = morgan("dev", {
    "stream": {
        write: function (str) { applog.debug(str); }
    }
});

app.use(httpLog);



app.use('/api', require('./lib/routes'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
