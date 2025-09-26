
const input=document.querySelector('input')

input.addEventListener("copy",function(){
    console.log('You have coppied.');
});

input.addEventListener("cut",function(){
    console.log('You have cuted.');
});

input.addEventListener("paste",function(){
    console.log('You have pasted.');
});

