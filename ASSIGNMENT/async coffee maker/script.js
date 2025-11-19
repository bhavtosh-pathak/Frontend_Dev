"use strict";

const outputArea = document.getElementById("output");


function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) reject("Failed to boil water!");
      else {
        outputArea.textContent += "Water boiled.\n";
        resolve("Water boiled");
      }
    }, delay);
  });
}


function brewCoffee() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) reject("Brewing failed!");
      else {
        outputArea.textContent += "Coffee brewed.\n";
        resolve("Coffee brewed");
      }
    }, delay);
  });
}


function pourCoffee() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) reject("Pouring failed!");
      else {
        outputArea.textContent += "Coffee poured into cup.\n";
        resolve("Coffee poured");
      }
    }, delay);
  });
}

boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => {
    outputArea.textContent += "Coffee ready for the team!";
  })
  .catch(error => {
    outputArea.textContent += `Error: ${error}\nProcess aborted.`;
  });
