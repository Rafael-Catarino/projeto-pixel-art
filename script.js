const btnStartPlaying = document.querySelector(".btn-start-playing");
const gridDiv = document.querySelector(".grid-div");
const btnClean = document.querySelector(".btn-clean");
const gridHeight = document.querySelector("#grid-height");
const gridWidth = document.querySelector("#grid-width");

btnStartPlaying.addEventListener("click", startPlaying);

function startPlaying() {
  const sizeWidth = document.querySelector("#grid-width").value;
  const sizeHeight = document.querySelector("#grid-height").value;
  createGridDivs(sizeWidth, sizeHeight);
}

function createGridDivs(sizeWidth, sizeHeight) {
  gridDiv.innerHTML = "";
  for (let l = 0; l < sizeWidth; l++) {
    const divl = document.createElement("div");
    gridDiv.appendChild(divl);
    for (let c = 0; c < sizeHeight; c++) {
      const divC = document.createElement("div");
      divC.classList = "div-c";
      divC.addEventListener("click", clickDiv);
      divl.appendChild(divC);
    }
  }
}

function clickDiv() {
  const color = document.querySelector(".color").value;
  const divColor = event.target.style.background;
  if (divColor === "") {
    event.target.style.background = color;
  } else {
    event.target.style.background = "";
  }
}

btnClean.addEventListener("click", clearDiv);

function clearDiv() {
  const divC = document.querySelectorAll(".div-c");
  for (let i = 0; i < divC.length; i++) {
    divC[i].style.background = "";
  }
}

gridHeight.addEventListener('input', () => {
  const spanGridHeight = document.querySelector('.span-grid-height');
  spanGridHeight.innerHTML = gridHeight.value;
});

gridWidth.addEventListener('input', () => {
  const spanGridWidth = document.querySelector('.span-grid-width');
  spanGridWidth.innerHTML = gridWidth.value;
})
