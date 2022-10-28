const container = document.getElementById("grid");

let columns = parseInt(
  prompt("How many rows/columns would you like? (Must be less than 100)")
);

function makeColumns(columns) {
  for (let i = 0; i < columns * columns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("gridCell");
    cell.id = i + 1;
    container.appendChild(cell);
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "black";
    });
  }
}

makeColumns(columns);
