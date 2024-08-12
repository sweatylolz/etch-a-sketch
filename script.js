//selects the container and adds 256 divs to it 
const container = document.getElementById("etchersketcher");

function makeDivs(numberDivs){
    for (let i=0; i < numberDivs; i++){
        let cells = document.createElement("div");
        container.appendChild(cells);
        cells.id = "etches" + i;
        cells.style.backgroundColor = "white";
        cells.style.width = "20px";
        cells.style.height = "20px";
    }
}

makeDivs(256); 

// document.getElementById("etches").addEventListener("click", clickFunction);

// function clickFunction() {
//     let cells = document.getElementById("etches");
//     cells.style.background = "black";
//     console.log("color changed");
// }

for (let i=0; i < 256; i++){
document.getElementById("etches" + i).onmouseover = function() {mouseOver()};

function mouseOver() {
    document.getElementById("etches" + i).style.background = "black";
}
}
