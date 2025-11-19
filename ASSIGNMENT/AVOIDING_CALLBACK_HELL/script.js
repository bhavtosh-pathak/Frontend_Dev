"use strict";

const outputArea = document.getElementById("output");

function design(callback) {
  setTimeout(() => {
    outputArea.textContent += "Design done.\n";
    callback();
  }, 1000);
}

function build(callback) {
  setTimeout(() => {
    outputArea.textContent += "Build done.\n";
    callback();
  }, 1000);
}

function test(callback) {
  setTimeout(() => {
    outputArea.textContent += "Tests passed.\n";
    callback();
  }, 1000);
}

function deploy(callback) {
  setTimeout(() => {
    outputArea.textContent += "Deployed.\n";
    callback();
  }, 1000);
}

function celebrate(callback) {
  setTimeout(() => {
    outputArea.textContent += "Celebration time!\n";
    callback();
  }, 1000);
}
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          outputArea.textContent += "Pipeline complete.\n";
        });
      });
    });
  });
});



async function runPipeline() {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  outputArea.textContent += "\nAsync/Await pipeline starting...\n";

  await delay(1000);
  outputArea.textContent += "Design done.\n";

  await delay(1000);
  outputArea.textContent += "Build done.\n";

  await delay(1000);
  outputArea.textContent += "Tests passed.\n";

  await delay(1000);
  outputArea.textContent += "Deployed.\n";

  await delay(1000);
  outputArea.textContent += "Celebration time!\n";

  outputArea.textContent += "Pipeline complete.\n";
}

runPipeline();
