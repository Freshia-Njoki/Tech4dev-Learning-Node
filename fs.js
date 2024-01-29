//file system module
const fs = require('fs');
fs.readFile('readme.txt', function (err,data){ //readFile accepts 2 parameters: fileName and callback function
    console.log(data);
}) 

const data = fs.readFileSync('readme.txt', 'utf-8' );
console.log(data);
const data2 = fs.readFileSync('datasource.json', 'utf-8')
let newData = JSON.parse(data2);
console.log(newData)
console.log(data2); //string
console.log(JSON.parse(data2)); //object
console.log(newData[0]['username']);

//write
// fs.writeFileSync('datasource.json', 'content') //replaces original content


//append- pushes data directly
// fs.appendFileSync