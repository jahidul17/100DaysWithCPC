

// setTimeout(() => {
//     console.log('Wait 3 second')
// }, 3000);


setTimeout(display,2000);

function display(){
    console.log("Wait 2 second for display function.")
}

// ----------------------------

const saveButton=document.querySelector('.save-botton');
const message=document.querySelector('.message');


// saveButton.addEventListener('click',saveUser);

// function saveUser(){
//     message.textContent="User registration successful";

//     setTimeout(()=>{
//         message.textContent="";
//     }, 2000);
// }


saveButton.addEventListener('click',displayCount);
function displayCount(){
    let count=0;
    message.textContent=count;

    setInterval(()=>{
        count++;
        message.textContent=count
    },1000)
};


