//selects the container and adds 256 divs to it 
const container = document.getElementById("etchersketcher");


let etchSize = Number(prompt("Type the size you would like grid to be (1-99)."));
let etchGrid = etchSize * etchSize;
let etchPixelSize = 360 / etchSize; //360 is the height and width of the container

function makeDivs(etchGrid){
    for (let i=0; i < etchGrid; i++){
        let cells = document.createElement("div");
        cells.classList = "etches";
        container.appendChild(cells);
        cells.style.backgroundColor = "white";
        cells.style.width = etchPixelSize + "px";
        cells.style.height = etchPixelSize + "px";
    }
}

makeDivs(etchGrid); 

const gridCells = document.querySelectorAll(".etches");

gridCells.forEach(cell => { 
    cell.addEventListener("mouseover", evt => {
      if (evt.buttons === 1) { //if user holds click they can 'draw' 
        cell.style.backgroundColor = "black";
      }
    });
  });