//selects the container and adds 256 divs to it 
const container = document.getElementById("container");

function makeDivs(numberDivs){
    for (let i=0; i < numberDivs; i++){
        let cells = document.createElement("div");
        container.appendChild(cells);
        cells.className = "etches";
    }
}

makeDivs(256); 

