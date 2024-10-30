const gridWidth = 810;
const gridContainer = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector(".grid-size-btn");
const clearBtn = document.querySelector(".clear-btn"); 
const randBtn = document.querySelector(".rand-btn");
const progBtn = document.querySelector(".prog-btn");

let currentMode = "rand";

// Random RGB color mode logic
const getRandomColor = function(item) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let randomRgb = `rgb(${r}, ${g}, ${b})`;
    item.addEventListener("mouseenter", () => {
        item.style.backgroundColor = randomRgb;
    });
};

// Progressive color mode logic
const getProgressiveColor = function(item) {
    let a = 0.1;
    item.addEventListener("mouseenter", () => {
        a = Math.min(a + 0.10, 1.0);
        item.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
    });
};

// Determine which color mode to use
const colorMode = function(item) {
    if (currentMode === "rand") {
        getRandomColor(item);
    } else if (currentMode === "prog") {
        getProgressiveColor(item);
    } else {
        alert("Error: no color mode selected");
    };
};

// Create each grid item with colorMode event listeners 
const createGridItem = function(gridRows) {
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    newGridItem.style.width = gridWidth / gridRows + "px";
    colorMode(newGridItem);
    gridContainer.appendChild(newGridItem);
};

// Create grid based on rows and columns
const createGrid = function(gridRows) {
    for (let i = 0; i < (gridRows * gridRows); i++) {
        createGridItem(gridRows);
    };
};

// Delete grid logic for grid resize
const deleteGrid = function() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.remove();
    });
};

// Clear grid logic
const clearGrid = function() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.style.backgroundColor = "white";
    });
};

// Clear grid button even listener
clearBtn.addEventListener("click", () => {
    clearGrid()
});

// Random RGB color mode button event listener
randBtn.addEventListener("click", () => {
    randBtn.classList.add("selected")
    progBtn.classList.remove("selected")
    currentMode = "rand";
});

// Progressive darkness color mode button event listener
progBtn.addEventListener("click", () => {
    progBtn.classList.add("selected");
    randBtn.classList.remove("selected");
    currentMode = "prog";
});

// Click event for grid size
gridSizeBtn.addEventListener("click", () => {
    gridRows = prompt("Enter size between 16 - 100", 16);
    if (gridRows < 16 || gridRows > 100) {
        alert("Invalid Input. Choose between 16 & 100.");
    } else {
        deleteGrid();
        createGrid(gridRows);
    }
});