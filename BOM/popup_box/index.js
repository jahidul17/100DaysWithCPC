
// alert("Hello");
// confirm("Are you sure!");




// function deleteSomething(){
//     let value=confirm('Do you delete that');

//     if(value){
//         console.log("Delete value.")
//     }
//     else{
//         console.log("Have not delete.")
//     }
// }

// deleteSomething()


function wellcomeMessage(){
    var h1=document.createElement('h1');
    let text;

    var name=prompt('Enter your name: ');
    if(name==null || name==''){
        text='No name found.';
    }
    else{
        text='Wellcome '+name;
    }

    let textNode=document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
};
wellcomeMessage();

