
var saveButton=document.querySelector('.button');
var message=document.querySelector('.message');
saveButton.addEventListener("click",startClock);



function startClock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let second=date.getSeconds();
    let time= hours + ":" + minutes + ":" + second;

    // add zero in front of numbers
    minutes=checkTime(minutes);
    second=checkTime(second);

    message.textContent = time;

    setInterval(startClock,1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



