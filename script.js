"use strict";

const container = document.querySelector(".container");
const startButton = document.querySelector(".start-button");

// creating random color generator for the background color style
const randomColor = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

let opacity = 1;

// creating a function that takes grid size as an arguement
const grid = function (gridSize) {
  // Outer for loop to print divs runs x amount of times, once for each row.
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div"); // creating a new div for the row
    row.classList.add("row"); // adding row class for styling
    // inner for loop that runs x amount of times for each row, creating x amount of squares
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div"); // creating a new div for the squares
      square.classList.add("square"); // adding square class for styling/formatting
      // on mouse enter -> change the background color of the div to 'white'
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = randomColor();
        if (opacity > 0) {
          opacity -= 0.1;
        } else {
          opacity === 0;
        }
        square.style.opacity = opacity;
        console.log(opacity);
      });
      // on mouse leave -> change the background color to nothing
      square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "";
      });
      row.appendChild(square); // appending the squares to the parent rows
    }
    container.appendChild(row); // appending the rows to the parent container
  }
};

container.classList.add("hidden");

// adding an event listener to our start button that expects a click
// when clicked remove the hidden classlist from the container (show the grid)
// and then store the answer to the prompt in 'answer'
// pass answer through grid function as the arguement

startButton.addEventListener("click", () => {
  let answer = prompt("Enter number here: ");
  if (answer > 100) {
    alert("Enter a number lower than 100");
    location.reload();
  } else if (answer < 100) {
    container.classList.remove("hidden");
    grid(answer);
  }
});
