
var photoSlider = ["./images/photo1.jpg", "./images/photo2.jpg", "./images/photo3.jpg"];

var imgtag=document.querySelector("#photo");

var currentPhoto = 0;


function nextPhoto(){
    currentPhoto++;
    if(currentPhoto>=photoSlider.length){
        currentPhoto=0;
        imgtag.src = photoSlider[currentPhoto];
    }
    else{
        imgtag.src = photoSlider[currentPhoto];
    }
}

function previousPhoto(){
    currentPhoto--;
    if(currentPhoto<0){
        currentPhoto=photoSlider.length-1;
        imgtag.src = photoSlider[currentPhoto];
    }
    else{
        imgtag.src = photoSlider[currentPhoto];
    }

}

// ----------- javascript bangla tutorial 54 : DOM | Changing CSS style dynamically-----------

var paragraph = document.querySelector("#para");

function addStyle(){
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "20px";
    paragraph.style.fontFamily = "Arial";
    paragraph.style.backgroundColor = "lightgrey";
    paragraph.style.padding = "10px";
    paragraph.style.borderRadius = "5px";
}

function removeStyle(){
    paragraph.style.color = "";
    paragraph.style.fontSize = "";
    paragraph.style.fontFamily = "";
    paragraph.style.backgroundColor = "";
    paragraph.style.padding = "";
    paragraph.style.borderRadius = "";
}

// -------- javascript bangla tutorial 55 : DOM | Event Listener-----------

var listener = document.querySelector("#country");

listener.addEventListener("click",eventListener);

function eventListener(){
    // listener.addEventListener("click", function(){ //anonymous function
    //     alert("You clicked on the country heading!");
    // });
    alert("You clicked on the country heading!");
}

var lorem=document.querySelector("#lorem");

lorem.addEventListener("mouseover", function(){
    lorem.classList.add("my-style");
});
lorem.addEventListener("mouseout", function(){
    lorem.classList.remove("my-style");
});

// ----------javascript bangla tutorial 56 : DOM | Event Listeners with multiple elements-----------

// document.querySelectorAll(".my-button")[0].addEventListener("click", function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + " is clicked";
// });
// document.querySelectorAll(".my-button")[1].addEventListener("click", function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + " is clicked";
// });
// document.querySelectorAll(".my-button")[2].addEventListener("click", function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + " is clicked";
// })


//Easy way to do the same thing using loop

var len=document.querySelectorAll(".my-button").length;

for(var i=0;i<len;i++){
    document.querySelectorAll(".my-button")[i].addEventListener("click", function(){
    var text=this.innerHTML;
    document.querySelector("h1").innerHTML=text + " is clicked";
})
}

//Or

// document.querySelectorAll(".my-button").forEach(function(button){
//     button.addEventListener("click", function(){
//         var text=this.innerHTML;
//         document.querySelector("h1").innerHTML=text + " is clicked";
//     });
// });

// ----------javascript bangla tutorial 57 : DOM | how to play audio in javascript-----------

var len2=document.querySelectorAll(".birds-btn").length;

for(var i=0;i<len2;i++){
    document.querySelectorAll(".birds-btn")[i].addEventListener("click", function(){
        var text=this.innerHTML;
        console.log(text + " is clicked");
        audioPlay(text);
    });
}

function audioPlay(text){
    
        switch(text){
            case "Parrot":
                var audio=new Audio("birds_sounds/parrot.mp3");
                audio.play();
                break;
            case "Dove":
                var audio=new Audio("birds_sounds/dove.mp3");
                audio.play();
                break;
            case "Pigeon":
                var audio=new Audio("birds_sounds/pigeon.mp3");
                audio.play();
                break;
        }

}