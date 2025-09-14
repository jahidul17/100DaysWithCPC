
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
