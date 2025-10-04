//for of 

let item=['apple','banana','Mango','Black Berry']
for(let fruits of item){
    // console.log(fruits)
}

//for in loop

let students={
    id:252,
    name:'Zahidul islam',
    cgpa:3.62
}

for(let x in students){
    console.log(students[x]) //print value
    console.log(x)//print key
    console.log(`${x} = ${students[x]}`)
}

//for

var numbers=[2,5,8,5,4]
for(var i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
console.log("-----------------");
//for each function is same as for function
numbers.forEach(element => {
    // console.log(element);
});
// or

numbers.forEach(function(x){
    // console.log(x)
})

squrelist=[]
numbers.forEach(function(x){
    squrelist.push(x*x);
})

console.log(squrelist);

console.log("-----------------");
var addfive=[]
numbers.forEach(function(value,index,array){
   add= array[index]=value+5;
   addfive.push(add)
})
// console.log(addfive)

//Map
//same as above but not need push in array it's return auto array list
var num=[2,5,2,5,8]
var sqrlist=num.map(function(x){
    return x*x
});

// console.log(sqrlist)

console.log("-----------------");
 var digit=[45,5,8,858,8,85,56]

var max=digit.filter(function(x){
    return x>10
});

console.log(max)


