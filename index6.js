"use strict";


const rawInput = (typeof process !== "undefined" && process.argv && process.argv[2]) ? process.argv[2] : undefined;
let parsedLimit = Number(rawInput);


if (!Number.isFinite(parsedLimit) || parsedLimit <= 0) {
  if (rawInput !== undefined) {
    console.log(`[Info] Invalid input "${rawInput}" for pyramid size — falling back to default 5.`);
  }
  parsedLimit = 5;
}

console.log("\n=== Q6 Pyramid Pattern Generator ===");
console.log(`Using limit = ${parsedLimit}\n`);


function generatePyramidLet(limit) {
  console.log("-> Pyramid using 'let' (recommended):");
  for (let i = 1; i <= limit; i++) {

    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
  console.log(""); 
}


function generatePyramidVar(limit) {
  console.log("-> Pyramid using 'var' (synchronous):");
  for (var i = 1; i <= limit; i++) {
 
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
  console.log("");
}


function demoVarClosureBug(limit) {
  console.log("-> Demo: var + async callbacks (shows re-use/leak of loop variables):");
  // Build rows using var and schedule timeouts to print them later
  for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += "* ";
    }
   
    setTimeout((/* no params */) => {
     
      console.log(`(async) row for i=${i} -> "${row.trim()}"`);
    }, 10 * i);
  }


}



generatePyramidLet(parsedLimit);

generatePyramidVar(parsedLimit);

demoVarClosureBug(parsedLimit);



