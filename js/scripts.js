let girdRows = 16;
let gridColumns = girdRows;
let girdSize = girdRows * gridColumns;
let gridWidth = 810;
const gridContainer = document.querySelector(".grid-container");

const createGridItem = function() {
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    newGridItem.style.width = gridWidth / girdRows + "px";
    gridContainer.appendChild(newGridItem);
};

for (let i = 0; i < girdSize; i++) {
    createGridItem();
};