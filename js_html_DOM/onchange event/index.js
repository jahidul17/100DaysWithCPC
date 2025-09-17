
console.clear();

// var input=document.querySelector("input[name=name]");

// input.addEventListener("change",changeHandler);

// function changeHandler(e){
//     // console.log(e)
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     console.log(e.target.name);

// }

// --------------


// var programs=document.querySelectorAll("input[name=program]");

// Array.from(programs).map((progm) => {
//     progm.addEventListener("change",programHandeler);

// })

// function programHandeler(e){
//     // console.log("e");
//     if (e.target.checked){
//         console.log(e.target.value);
//     }
// }


// -----------------

var department=document.querySelector("#department");

department.addEventListener('change',departmentHandler);
function departmentHandler(e){
    console.log(e.target.value);
}



