
// function >> constructor
function studentInfo(name,age){
    return{
        name,
        age
    }
}

var zahid=studentInfo("Zahidul islam",25)
console.log(zahid)

//object >> function

let message={
    'body name'(){
        return "Hi I am object function"
    }
}

console.log(message['body name']())
