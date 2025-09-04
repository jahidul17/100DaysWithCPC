const data = require("./friends.json");
console.clear();

// Accessing JSON Data
console.log(data);
console.log(data.friends[0]);
console.log(data.friends[0].name);

// Modify JSON Data
data.friends[0].age = 35;
console.log(data.friends[0]);

// delete JSON data
delete data.friends[0].age;
console.log(data.friends[0]);

// conversion between js and json
const jsonString = JSON.stringify(data);
console.log(jsonString);

const jsObject = JSON.parse(jsonString);
console.log(jsObject);