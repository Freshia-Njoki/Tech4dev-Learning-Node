
const fs = require('fs');
function getUser() {
  
    const data = fs.readFileSync('./datasource.json', 'utf-8');
    return JSON.parse(data);
    // console.log(data)
}
module.exports = getUser();