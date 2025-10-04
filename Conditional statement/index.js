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

