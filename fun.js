
function addition(a,b){
  return a + b;
}

function substraction(a,b){
    console.log("Substraction is :"+ a-b);
    return a-b;
}

add=addition(5,10);
document.writeln(add);

document.writeln("<br>");
document.writeln(substraction(10,5));
console.log("Substraction is :"+ substraction(10,5));

// function expression

var display2 =function displaymessage(message){
    document.writeln(message);
};
display2("<br>I am zahidul islam.---- function expression");

//  IIFEs  function

(function display(message){
    document.writeln(message);
})("<br>I am zahidul islam----IIFEs")


//Array

var country1=["Bangladesh","India","Pakistan","Nepal","Bhutan"];
var country2=["USA","UK","Canada","Australia","New Zealand"];
document.writeln("<br>Countries are : "+ country1);
console.log(country1[2]);

document.writeln("<br><br>All Countries are : "+ country2.concat(country1));

let num1=[1,2,3,4,5];
sum=0;
for(let i=0;i<num1.length;i++){
    document.writeln("<br>Multiplication is :"+ (num1[i]*3));
    sum=sum+num1[i];
}
document.writeln("<br>Sum is :"+ sum);

num1.push(10);//add element at ends
console.log(num1);
num1.unshift(0);//add element at beginning
console.log(num1);
num1.pop(); //delete last element
console.log(num1);
num1.shift(); //delete first element
console.log(num1);
num1.splice(2,2); //delete element from index 2
console.log(num1);
num1.splice(2,0,80,55,60); //add element at index 2
console.log(num1);
num1.splice(2,2,22,33); //update element from index 2
console.log(num1);

// string sort 
var fruits=["Banana","Orange","Apple","Mango"];
fruits.sort();
console.log(fruits);

num1.sort(function(a,b){
    // return a-b; //ascending order
    return b-a;//decending order
}); 
console.log(num1);
