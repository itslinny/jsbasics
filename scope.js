function a(){
    console.log("isidd a");
    console.log(b)
    var b=10;
    console.log(b); 
    c();
    function c (){
        console.log(b);
console.log("namste inside 88 c");
    }
}
a();
var b=20;
console.log(b)
