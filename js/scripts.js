let gridRows = 16
let gridColumns = gridRows
let gridSize = gridRows * gridColumns;
const gridContainer = document.querySelector(".grid-container");

const createGridItem = function() {
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item")
    gridContainer.appendChild(newGridItem)
    newGridItem.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "lightgrey";
    })
};

for (let i = 0; i < gridSize; i++) {
    createGridItem()
};