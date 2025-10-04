//Default parameter
function message(text="This is default parameter."){
    console.log(text)
}

message();
message("I am zahidul islam");

//Rest parameter

function manyNumbers(x,y, ...z){
    console.log(`x = ${x} and y=${y} then z=${z}`)
    
};

manyNumbers(10,20,25,30,78,58,5,6,52);

//Spread Operator
function addNumbers(x,y,z){
    return x+y+z;
}

let number=[1,2,3]
console.log(addNumbers(...number))

let num1=[10,...number,50];
console.log(num1);

let num2=[1,2,3,5,2]
let num3=[5,5,8,5,8]

var concat=[...num2,...num3]
console.log(concat);

let p1={
    name:"Zahidul Islam",
    age:25
};
let p2={
    nationality:"Bangladeshi",
    occupation: "Student"

}

let p3={...p1, ...p2}
console.log(p3)
