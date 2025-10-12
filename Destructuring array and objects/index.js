
let numbers=[10,20,30,40,50]

let [a,b,c,d,e]=numbers //destructure

let [num1,num2,...z]=numbers

console.log(numbers);
console.log(c);
console.log(e);
console.log(z);

//swap
let one=20, two=30;
[one,two]=[two,one]
console.log(one)
console.log(two)


//Object destructure

const studentInfo={
    id:101,
    fullName:'zahidul Islam',
    gpa:3.56,
    //nested object
    language:{
        native:'Bangla',
        flunet:'English',
    }
}

// console.log(studentInfo.fullName)
// console.log(studentInfo.gpa)

//ES6 apply
const {fullName,gpa,language}=studentInfo

console.log(fullName)
console.log(gpa)
console.log(language.native)

//Destructure function parameters

let studentDisplay=({name,passion})=>{
    console.log(`Name: ${name} and Passion: ${passion}`)
}

let student={
    name:'zahid khan',
    age:25,
    passion:'student'
}

studentDisplay(student)


//Find function 
let array=[5,55,14,20,25]

let firstEven=array.find(x => x%2==0); //return 14
console.log(firstEven)

let evenNumbers=(value,index,array)=>{
    if(value%2===0){
        return value;
    }
}

let evenValue=array.find(evenNumbers);
let evenIndex=array.findIndex(evenNumbers);

console.log(evenValue);
console.log(evenIndex);
