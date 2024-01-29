
const fs = require('fs');
function getUser() {
  
    const data2 = fs.readFileSync('./datasource.json', 'utf-8');
    return JSON.parse(data2);
    // console.log(data2)
}
module.exports = getUser();