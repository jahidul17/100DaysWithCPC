//Event Propagation determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM is Event Bubbling and Event Capturing.

const outerDiv=document.getElementById('outer');

const innerDiv=document.getElementById('inner');

outerDiv.addEventListener('click',function(){
    console.log('Outer div is called.');
},
true //which order the event will execute.
);

innerDiv.addEventListener('click',function(){
    console.log('Inner div is called.');
},
// true or false
);



