const gridWidth = 810;
const gridContainer = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector(".grid-size-btn");
const clearBtn = document.querySelector(".clear-btn"); 
const randBtn = document.querySelector(".rand-btn") // Random color mode btn
const progBtn = document.querySelector(".prog-btn") // Progressive color mode btn

randBtn.addEventListener("click", () => {
    randBtn.classList.add("selected")
    progBtn.classList.remove("selected")
});

progBtn.addEventListener("click", () => {
    progBtn.classList.add("selected")
    randBtn.classList.remove("selected")
})

const createGridItem = function() {
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    newGridItem.style.width = gridWidth / gridRows + "px";
    newGridItem.addEventListener("mouseenter", () => {
        newGridItem.style.backgroundColor = "red";
    });
    gridContainer.appendChild(newGridItem)
};

const createGrid = function(gridRows) {
    for (let i = 0; i < (gridRows * gridRows); i++) {
        createGridItem();
    }
};

const deleteGrid = function() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.remove();
    });
};

const clearGrid = function() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.style.backgroundColor = "white";
    });
};

gridSizeBtn.addEventListener("click", () => {
    gridRows = prompt("Enter size between 16 - 100", 16);
    if (gridRows < 16 || gridRows > 100) {
        alert("Invalid Input. Choose between 16 & 100.");
    } else {
        deleteGrid();
        createGrid(gridRows);
    }
});

clearBtn.addEventListener("click", () => {
    clearGrid()
});