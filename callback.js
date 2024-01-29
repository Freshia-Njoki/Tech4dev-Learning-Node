// var cnt =0;
// function f1(){
//     console.log(1+1);
//     if(cnt < 5){
//         cnt = cnt+1;
       
//         f1();
//     }
// }
// function f2(){
//     console.log("function 2");
//     f1();
// }
// f1();

// callback function basic structure
function f1(cbk){
    console.log("f1");
    cbk();
}
function f2(){
    console.log("function 2");
}
f1(f2);
// f1(f2()); //executes then throws an error

//callback 2
function f4(cbk2){
    cbk2();
}

f4(function () {
    console.log("call back")
});

//callback 3
setTimeout(function () { //takes 2 parameter: first param and timer
    console.log("timed callback");
},3000); //3000 = 3 seconds

//example
function parent(){
    let fruit = "banana";
    function child(cbk){
        cbk();
        console.log(stomach)
    }

    child( () => {
        stomach = "full"
        fruit ="orange"
        console.log("child eats " + fruit);
        return stomach;
    })
}
parent();