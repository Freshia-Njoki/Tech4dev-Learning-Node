//file system module
const fs = require('fs');
// fs.readFile('readme.txt',function(err,data){
// console.log(data)
// })
function addUser(username, age) {
    const dataStruct = {
        username: null,
        age: null
    }
    const data2 = fs.readFileSync('./datasource.json', 'utf-8');
    let newData = JSON.parse(data2);
    console.log(newData)

    let prop = Object.create(dataStruct);
    prop.username = username
    prop.age = age
    newData.push(prop);
    //write
    fs.writeFileSync('./datasource.json', JSON.stringify(newData)) //doesn't replaces the original content
}
module.exports = addUser;