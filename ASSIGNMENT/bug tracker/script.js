"use strict";

const outputArea = document.getElementById("output");

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("API failure"));
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    outputArea.textContent = "Bugs fetched:\n";
    bugs.forEach((bug, index) => {
      outputArea.textContent += `${index + 1}. ${bug}\n`;
    });
  })
  .catch(err => {
    outputArea.textContent = `Error fetching bugs: ${err.message}`;
  });
