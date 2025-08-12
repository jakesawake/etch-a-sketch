"use strict";

const container = document.querySelector(".container");

// creating a function that takes rows and columns as arguements
const grid = function (rows, columns) {
  // for loop to print divs if i is less than the amount of rows * columns
  for (let i = 0; i < rows * columns; i++) {
    const square = document.createElement("div"); // creating a new div element that will be our little etch a sketch squares
    container.appendChild(square); // appending the newly created square divs to the container
    square.style.border = "2px solid white"; // styling our small divs
    square.style.width = "50px";
    square.style.height = "50px";
    // on mouse enter -> change the background color of the div to 'white'
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "white";
    });
    // on mouse leave -> change the background color to nothing
    square.addEventListener("mouseleave", () => {
      square.style.backgroundColor = "";
    });
  }
};

// const button = document.createElement("button");
// container.appendChild(button);
// button.style.border = "2px dotted blue";
// button.style.width = "100px";
// button.style.height = "100px";

// prints the number of squares
grid(16, 16);
