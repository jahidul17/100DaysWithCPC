
// try{
//     alert("Hi every one.");
//     // var x=10;
//     console.log(x);
//     alert("Bye every one.")
// }catch(err){
//     //when deteced error
//     console.log("Inside the catch block.")
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }finally{
//     //always run this block
//     console.log("Inside this finally block.")
// }

// ---------------

document.querySelector("#checkBox").addEventListener('click',function(){
    // alert("Button is clicked.")
    var num=document.querySelector('#numInput').value;
    // console.log(num);
    try{
        if(num>10){
            throw "Input is too high."
        }
        else if(num<5){
            throw "Input is too low."
        }
        else{
            console.log(num);
        }
    }catch(err){
        console.log(err);
    }

})


