"use strict";

const outputArea = document.getElementById("output");

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject("Server A failed");
      else resolve("Server A response");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject("Server B failed");
      else resolve("Server B response");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(() => {
    outputArea.textContent += "Deployment completed for all servers.\n";
  })
  .catch(error => {
    outputArea.textContent += `Error in deployment: ${error}\n`;
  });

Promise.race([serverA(), serverB()])
  .then(firstResponse => {
    outputArea.textContent += `Fastest response: ${firstResponse}\n`;
  })
  .catch(error => {
    outputArea.textContent += `Fastest response error: ${error}\n`;
  });
