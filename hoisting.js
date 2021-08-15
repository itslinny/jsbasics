//line 1 to 7  doesnt give error  this is hoisting concept where 
//the variables or methods in context can be accessed even before the code execution
console.log(a); //prints undefined
b();//goodMorning
console.log(b); //he whole function itself
//arrow functions dont print the code it prints undefined
console.log(c);//c is arrow function so it is undefined
//this gives error  uncaught typeerror c is not a function
//c();
console.log(c2);//c2 is proper function so its is printing whole function
var a=10 //initializing a
function b(){
    console.log("GoodMorning");
}

console.log(a)//prints a as 10
b();//prints goodMorning
//proper function
function c2 () {
    console.log("this is normal function")
}
//thiis is arrow function
var c = () =>{
    console.log("this is arrow function");
}
//execute c arrow function
c();