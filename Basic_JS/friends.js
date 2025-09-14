const data = require("./friends.json");
// console.clear();

// Accessing JSON Data
// console.log(data);
console.log(data.friends[0]);
console.log(data.friends[0].name);

// Modify JSON Data
data.friends[0].age = 35;
console.log(data.friends[0]);

// delete JSON data
// delete data.friends[0].age;
// console.log(data.friends[0]);

// conversion between js and json
// const jsonString = JSON.stringify(data); //convert js object to json string for storage or transmission to server
// console.log(jsonString);

// const jsObject = JSON.parse(jsonString); //convert json string back to js object for manipulation or display for user
// console.log(jsObject);

var school=data.school;
console.log(school);

var cgpa=data.cgpa["Zahidul Islam"];
console.log(cgpa);

var languages=data.languages;
console.log(languages);

for(var i=0;i<languages.length;i++){
    console.log(languages[i]);
}

var campus=data.campus;
console.log(campus);

var campus=data.campus["library"];
console.log(campus);

var club=data.clubs[2];
console.log(club);

// for (x in data.friends[1]){
//     console.log(x + ": " + data.friends[1][x]);
// }


// for(x in data.friends){
//     console.log(data.friends[x].name);
// }

for(x in data.friends){
    console.log(data.friends[x]);
}

