//BOM (Browser Object Model)

console.clear();

// console.log(location.href);
// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);


var locationDiv=document.getElementById('location-div');

var p1=locationDiv.children[0];
p1.textContent=location.href;

var p1=locationDiv.children[1];
p1.textContent=location.protocol;

var p1=locationDiv.children[2];
p1.textContent=location.hostname;

var p1=locationDiv.children[3];
p1.textContent=location.port;

var visitbutton=document.querySelector('button');

visitbutton.addEventListener('click',function(){
    location.assign('https://www.w3schools.com/django/django_create_project.php');
})

