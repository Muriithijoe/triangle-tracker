function addition(){
var a =parseInt(prompt("Enter the side A"));
var b =parseInt(prompt("Enter the side B"));
var c =parseInt(prompt("Enter the side C"));

//conditions to be met
if(a===b && b===c){
alert("This is an equilateral triangle");
}
else if(a===b || b===c || a===c){
alert("This is an isosceles triangle");
}
else if(a+b>c||b+c>c||a+c>b){
alert("This is a scalene triangle");
}
else if(a+b<=c||b+c<=a||a+c<=b){
alert("This is not a triangle");
}
else{
alert("TRY AGAIN.WRONG INPUT");
}}
