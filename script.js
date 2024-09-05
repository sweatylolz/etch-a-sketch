const container = document.getElementById("etchersketcher");

let startbtn = document.getElementById("start");
startbtn.onclick = function(){startClick()};
  
function startClick() {
  makeDivs();
}

function makeDivs(){
    let etchSize = Number(prompt("Type the size you would like grid to be (1-99)."));
        if(etchSize > 99 || etchSize < 1){
            alert("Invalid Input");
            etchSize = Number(prompt("Type the size you would like grid to be (1-99)."));
        }

    let etchGrid = etchSize * etchSize;
    let etchPixelSize = 360 / etchSize; //360 is the height and width of the container
    document.querySelectorAll('.etches').forEach(e => e.remove());

    for (let i=0; i < etchGrid; i++){
        let cells = document.createElement("div");
        cells.classList = "etches";
        container.appendChild(cells);
        cells.style.backgroundColor = "white";
        cells.style.width = etchPixelSize + "px";
        cells.style.height = etchPixelSize + "px";
    }

    draw();
}

function draw(){
const gridCells = document.querySelectorAll(".etches");
//allows user to click and drag to etch
  gridCells.forEach(cell => { 
    cell.addEventListener("mouseover", evt => {
      if (evt.buttons === 1) { //if user holds click they can 'draw' 
        cell.style.backgroundColor = "black";
      }
    });
  });
}

//reset button sets the background of all grid divs to white
  document.getElementById("erase").onclick = function(){erase()};

  function erase() {
    let cell = document.getElementsByClassName("etches");
    for (cell of cell)
        {
            cell.style.backgroundColor = "white";   
        }
  }

