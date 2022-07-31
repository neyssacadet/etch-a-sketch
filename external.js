function makeGrid(row,column){
    container.style.gridTemplateColumns = (`repeat(${column}, 2fr`);
    container.style.gridTemplateRows = (`repeat(${row}, 2fr`);
    for (i=0; i<row*column; i++){
        row = column;
        const divs = document.createElement("div");
        divs.className ="square";
        const container = document.querySelector("#container")
        container.append(divs);
        container.onmouseover = function(event) {
            let target = event.target;
            target.style.background = 'pink';
      };
      
        container.onmouseout = function(event) {
            let target = event.target;
            target.style.background = 'blue';
      };
}
}

function sizeit () {
    let userInput = Number(window.prompt ("What grid size would you like?"));
    makeGrid(userInput,userInput);
}



