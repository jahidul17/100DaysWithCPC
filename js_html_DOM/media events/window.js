// window.addEventListener("load",function(){
//     console.log("load");
// });

// window.addEventListener("unload",function(){
//     console.log("Unload");
// });

// window.addEventListener("scroll",function(){
//     console.log("Scroll");
// });

window.addEventListener("resize",function(){
    const width = this.window.outerWidth;
    const height = this.window.outerHeight;

    console.log(`height: ${height}, width: ${width}`)
})

const details = document.querySelector("details");

details.addEventListener("toggle",function(e){
    // console.log(e);
    console.log(e.target.open);
});

