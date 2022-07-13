// created 256 divs with class name "square" under the div with ID = container by using a for loop. 
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
