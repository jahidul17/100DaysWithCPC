// Traditiional function
function display1(){
    console.log("This is traditional function.")
}

// ES6 function

let display2= () =>{
    console.log("This is modern ES6 function.")
}

display1();
display2();

var message1=()=>{
    return "This is message one."
}

var message2=()=> "This is message two." //online function when one statement return

// console.log(message1());
// console.log(message2());


// Arrow function with map and filter
var students = [
    {
        id : 101,
        name : 'Anisul Islam',
        gpa : 3.92
    },
    {
        id : 102,
        name : 'Rabeya Begum',
        gpa : 3.12
    },
    {
        id : 103,
        name : 'Rokib',
        gpa : 2.92
    },
    {
        id : 104,
        name : 'Limon',
        gpa : 4.92
    },
]


function studentsName(){
    return students.filter(function(x){
        return x.gpa>3
    }).map(function(y){
        return y.name;
    });
};

// console.log(studentsName());

// Now above function convert to ES6 modern function

let studentName2=()=>{
    return students.filter((x)=>{
        return x.gpa>3
    }).map((y)=>{
        return y.name
    });
};

console.log(studentName2());


