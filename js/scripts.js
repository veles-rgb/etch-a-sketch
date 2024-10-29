const gridWidth = 810;
const gridContainer = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector(".grid-size-btn")

const createGridItem = function() {
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    newGridItem.style.width = gridWidth / gridRows + "px";
    newGridItem.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "red";
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

gridSizeBtn.addEventListener("click", () => {
    gridRows = prompt("Enter size");
    if (gridRows < 16 || gridRows > 100) {
        alert("Invalid Input. Choose between 16 & 100.");
    } else {
        deleteGrid();
        createGrid(gridRows);
    }
});