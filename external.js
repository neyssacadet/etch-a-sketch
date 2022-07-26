function makeGrid(row,column){
    for (i=0; i<row*column; i++){
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
 
/*
const button = document.querySelector("#size");
button.addEventListener("click", function () {
    let playerOne = window.prompt ("What size grid would you like?");
    return playerOne;
    console.log(playerOne);
});

/*if(button == 100){
    for (i=0; i<100; i++){
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
else{
    for (i=0; i<256; i++){
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
}*/


