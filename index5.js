console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}
"use strict";

const score = 50;

const announce = () => {
  console.log("Game started");
};

let status = "ready";

const startGame = () => {
  console.log(status);
};

console.log(score);
announce();
startGame();
