// main modules: http, node modules, querystring, fs, path, util, url
// import (sub) from './sub';
const res = require('./sub');
const http = require('http');

//res(); -logs the last function- the ones before are replaced
// res.f2();
// res.thingsWedo();
res.login();
res.loggedOut();

let server = http.createServer(function (req, res) { //createServer 'promises' accepts a function only
    // console.log("server running..."); //for this to log, tap the browser at localhost:2000
    res.end("Hello User"); //displays on page
    // res.send(); //for framework
}).listen(2000, function() { //listen accepts 2 parameters-the http port number and function
    console.log("server has started")
});

