"use strict";

const container = document.querySelector(".container");

// creating a function that takes rows and columns as arguements
const grid = function (gridSize) {
  // for loop to print divs if i is less than the amount of rows * columns
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div"); // creating a new div element that will be our little etch a sketch squares
    row.classList.add("row");
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      // on mouse enter -> change the background color of the div to 'white'
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "white";
      });
      // on mouse leave -> change the background color to nothing
      square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "";
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
};

grid(16);

// const button = document.createElement("button");
// container.appendChild(button);
// button.style.border = "2px dotted blue";
// button.style.width = "100px";
// button.style.height = "100px";
