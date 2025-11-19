"use strict";

const outputArea = document.getElementById("output");

outputArea.textContent += "Start\n";

setTimeout(() => {
  outputArea.textContent += "setTimeout macrotask\n";
}, 0);

Promise.resolve().then(() => {
  outputArea.textContent += "Promise microtask\n";
});

outputArea.textContent += "Synchronous Log\n";

outputArea.textContent += "End\n";
