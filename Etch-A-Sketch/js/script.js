//create default values 
const StartGridSize = 20
let gridState = StartGridSize

let color = "black";
let click = true;

//UI
    //set element references 
const grid = document.querySelector("#grid-container");
const resetButton = document.getElementById("reset");
const blackButton = document.getElementById("black_btn");
const rainbowButton = document.getElementById("rainbow_btn");
const eraserButton = document.getElementById("eraser_btn");
const square = document.querySelector("div");


    //functions
        //creates initial 10x10 grid 
startGrid = (rows, columns) => {
    grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${columns}, 1fr)`
    for (let i = 0; i < (rows*columns); i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', setColor);
        square.style.background = "white";
        grid.appendChild(square);
    }
};
    //run function upon start
window.onload = () => {
        startGrid(gridState, gridState);
    }

    // Clear Button
reset = () => {
    grid.innerHTML = '';
    startGrid(gridState, gridState); 
}

  //slide bar fuctions
    //1.set new grid size
newGridState = (newSize) => {
    gridState = newSize
  }

  //2.set slider to desired value 
sliderNewValue = (value) => {
    sliderValue.innerHTML = `${value} x ${value}`
  }

  //3.put it all together
changeGridSize = (newValue) => {
    newGridState(newValue);
    sliderNewValue(newValue);
    startGrid(gridState, gridState);
    reset();
  }

  //colors
  //create a random color
randomColor = () => {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  return `rgb(${R},${G},${B})`
}
 //choose color 
pickColor = (choice) => {
  color = choice;
}
 //set color 
function setColor() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = randomColor();
    } else {
      this.style.backgroundColor = color;
    }
  }
}
  



//actions
sizeSlider.onmousemove = (e) => sliderNewValue(e.target.value)
sizeSlider.onchange = (e) => changeGridSize(e.target.value)
resetButton.onclick = () => reset(); 
blackButton.onclick = () => pickColor('black')
rainbowButton.onclick = () => pickColor('random') 
eraserButton.onclick = () => pickColor('white') 

