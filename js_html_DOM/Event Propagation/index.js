const outerDiv=document.getElementById('outer');

const innerDiv=document.getElementById('inner');

outerDiv?.addEventListener('click',function(){
    console.log('Outer div is called.');
},
true
);

innerDiv?.addEventListener('click',function(){
    console.log('Inner div is called.');
},
// true
);



