// Local Storage offers persistent storage of up to 5–10MB per domain and is accessible across all open windows/tabs of the same origin. Data in local storage remains until manually cleared by the user or code; it is not sent to the server with each HTTP request.

// Session Storage is designed for temporary storage, limited to a single tab or window session, and also provides around 5MB capacity. All data is deleted automatically when the tab or browser is closed, and it is not accessible across tabs or windows nor sent to the server.

// Cookies have a much smaller capacity (about 4KB) but allow the developer to set both session-based and persistent expiration times. Cookies are sent to the server with every HTTP request and can be set by both client-side code and the server.


// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage
// sessionStorage - store, read, update and remove data
// tab or window based: data gets lost when you close the tab or window
// sessionStorage store data as key value pair - string

// setItem(key, value)
sessionStorage.setItem("userName", "Zahidul islam");
sessionStorage.setItem("password", "0123456789");


// getItem(key)
const userName = sessionStorage.getItem("userName");
const userPassword = sessionStorage.getItem("password");
console.log(userName, userPassword);
document.writeln(`User Name: ${userName} <br> Password: ${userPassword} <br>`);

// removeItem(key)
// sessionStorage.removeItem("userName");
// sessionStorage.removeItem("password");

// setItem(key, value)
const countries = ["Australia", "Bangladesh", "Nepal"];
var country=sessionStorage.setItem("countries", JSON.stringify(countries));

// getItem(key)
const countriesList = JSON.parse(sessionStorage.getItem("countries"));
console.log(countriesList);

// sessionStorage.clear();