greeting = "Welcome"; 
ReferenceError: greeting is not defined
"use strict";

function showMessage() {
  let greeting = "Welcome"; 
  console.log(greeting);
}

showMessage();
"use strict";

function showMessage() {
  let greeting = "Welcome";

  debugger; 

  console.log(greeting);
}

showMessage();
