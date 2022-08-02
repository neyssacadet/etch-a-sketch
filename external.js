//Initialization 
let defaultSize = 16;

//function to create a grid 
function createCustomGrid(row,column){
    container.style.gridTemplateColumns = (`repeat(${column}, minmax(0.5px, 1fr)`);
    container.style.gridTemplateRows = (`repeat(${row}, minmax(0.5px, 1fr)`);
    for (i=0; i<row*column; i++){
        const divs = document.createElement("div");
        divs.className ="square";
        const container = document.querySelector("#container")
        container.append(divs);     
        container.onmouseout = function(event) {
            let target = event.target;
            target.style.background = 'blue';
      };
    }
}

//function that makes button clickable 
function sizeit () {
    let userInput = Number(window.prompt ("What grid size would you like?"));
    clearGrid();
    createCustomGrid(userInput,userInput);
}

function clearGrid(){
    container.innerHTML = "";
}

//this is the default 16x16 once game is loaded. 
window.onload = () => {
    createCustomGrid(defaultSize,defaultSize);
}