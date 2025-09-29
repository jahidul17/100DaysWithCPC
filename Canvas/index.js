var c=document.getElementById('myCanvas');

var ctx=c.getContext("2d");

ctx.strokeStyle="black";
ctx.strokeRect(10,10,380,280);

ctx.fillStyle="green";
ctx.fillRect(10,10,376,276);


var centerX=c.width/2;
var centerY=c.height/2;

ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
ctx.fillStyle="red";
ctx.fill();
// ctx.strokeStyle="pink";
ctx.stroke();


// ---------------

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();
