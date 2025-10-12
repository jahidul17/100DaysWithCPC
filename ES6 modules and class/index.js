import { text,setText } from "./myModule.js";

// console.log(text);


console.log(setText("Good bye ES6"));


class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    set StudentName(name){
        //it can set one parameter
        this.name=name;
    }

    get StudentInfo(){
        return this.id+" "+this.name;
    }

}


const s1=new Student(105,'Zahidul Islam')

console.log(s1)
console.log(s1.id)
console.log(s1.name)

s1.StudentName='Mr Khan';
console.log(s1)

console.log(s1.StudentInfo)