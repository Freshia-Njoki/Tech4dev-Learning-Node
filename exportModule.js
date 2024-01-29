function thingsWedo(){
    console.log("Just to stay happy");
}
// thingWedo(); //exported and called in another file

function newYear(){
    console.log("hapy new year")
}

module.exports = {thingsWedo:thingsWedo, f2:newYear};
module.exports = thingsWedo;

const userLog = {
    login : function (){
        console.log("user logged in successfully")
    },
    loggedOut : function () {
        console.log("User logged out completely")
    }
}
module.exports = userLog;
