
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

// find max number from array
function findMax(arr){
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
var scores=[45,67,23,89,12];
console.log("Max number is :"+ findMax(scores));

// 2D array 

function maxScore(){
    var maxscore=playerinfo[0][1];
    var maxscorer=playerinfo[0][0];
    for(var i=0;i<playerinfo.length;i++){
        if(playerinfo[i][1]>maxscore){
            maxscore=playerinfo[i][1];
            maxscorer=playerinfo[i][0];
        }
    }
    return maxscorer;
}


var playerinfo=[
    ["Zahidul", 25],
    ["Asraful", 30],
    ["Jaman", 28],
    ["Sumaya", 50],
    ["Ria", 28],
];

console.log(maxScore() + " has the highest score");
document.writeln("<br>"+ maxScore() + " has the highest score");


// create and call object

function person(name,age,language){
    this.name=name;
    this.age=age;
    this.language=language;

    // Method to display person information
    this.displayInfo=function(){
        document.writeln("<br>Name: "+ this.name + ", Age: "+ this.age + ", Language: "+ this.language);
    }
}

var jahidul=new person("Jahidul",25,"JavaScript");
var sakib=new person("Sakiul Hasan",30,"Python");
var jaman=new person("Jaman",28,"Java");

console.log(jahidul.name,jahidul.age,jahidul.language);
console.log(sakib.name,sakib.age,sakib.language);
console.log(jaman.name,jaman.age,jaman.language);

sakib.displayInfo();

var num5=parseInt(50);

console.log(Math.sqrt(num5));
console.log(Math.pow(num5,3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(0,150,30,20,-8,-200));
console.log(Math.max(0,150,30,20,-8,-200));
console.log(Math.random());//0 to 1
console.log(Math.floor(Math.random()*10)+1);//1 to 10
console.log(Math.floor(Math.random()*100)+1);//1 to 100
console.log(Math.floor(Math.random()*6)+1);//1 to 6



var date= new Date();
console.log(date)

var day=new Date().getDate();
console.log(day);

var year= new Date().getFullYear();
console.log(year);

var month=new Date().getMonth()+1;
console.log(month);

var minute=new Date().getMinutes();
console.log(minute);

var hour= new Date().getHours();
console.log(hour);

