const http = require('http');
// const cors = require('cors');
const URL = require('url');
const userActivity = require('./addUser/adduser')
const getData = require('./getUser/retrieve.js')
const server = http.createServer(function (req, res) {

    const data =[
        {username: 'naomi', age: 10},
        {username: 'sefa', age: 14},
        {username: 'eric', age: 11},
    ]

    if(req.url == '/'){
        // res.writeHead(200, {'Content-Type':'application/json'});
        res.writeHead(200, {'Content_Type':'text/html'});
        res.write("<html><body><h1>welcome</h1></body></html>");
        // res.write("[{'name:''user','age':4,'gender':'male'}]");
        res.end();      
    }
    else if(req.url == '/about') {
        res.writeHead(200, {'Content_Type':'text/html'});
        res.write("about page");
        res.end();
    } else if(req.url == '/users') {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200, {'Content_Type':'application/json'});
        res.write(JSON.stringify(data));
        res.end();
    } 
   
    else if(req.url == '/addUser?username=ben&age=15'){
        const newUrl = URL.parse(req.url, true)
        const params = newUrl.query
        let u_name = params.username;
        let u_age = params.age
        userActivity(u_name, u_age);
        res.end("record added");
    }
    else if(req.url.startsWith ('/addNewUser')){ //is a string -this browser route directly pushes (username 'Freshia' and age '12') into our datasource.json http://localhost:5000/addNewUser?username=Freshia&age=12
        const newUrl = URL.parse(req.url, true)
        const params = newUrl.query
        let username = params.username;
        let age = params.age
        userActivity(username, age);
        res.end("record added successfully");
    }   
    else if(req.url == '/getUsers') {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200, {'Content_Type':'application/json'});
        res.write(JSON.stringify(getData));
        res.end();
    }
    else {
        res.writeHead(404, { 'Content_Type': 'text/html' });
        res.end();
    }
    
});

server.listen(5000, function () {
    console.log("Server running")
});