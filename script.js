const btnStartPlaying = document.querySelector("#btn-start-playing");
const gridDiv = document.querySelector(".grid-div");
const btnClean = document.querySelector("#btn-clean");
const gridHeight = document.querySelector("#grid-height");
const gridWidth = document.querySelector("#grid-width");
const divsColor = document.querySelectorAll(".color");


window.onload = () => {
  addClickDivs();
  createGridDivs();
  addColorDivs();
}

/* botão de começo */
btnStartPlaying.addEventListener("click", startPlaying);

function startPlaying() {
  const sizeWidth = document.querySelector("#grid-width").value;
  const sizeHeight = document.querySelector("#grid-height").value;
  createGridDivs(sizeWidth, sizeHeight);
}

/* gerando os pixels */
function createGridDivs(sizeWidth = 16, sizeHeight = 19) {
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

/* pintando os pixels */
function clickDiv() {
  const selectColor = document.querySelector(".select");
  if(selectColor.value !== undefined && event.target.style.background === '') {
    event.target.style.background = selectColor.value;
  } else if(selectColor.value === undefined && event.target.style.background === '') {
    event.target.style.background = selectColor.style.backgroundColor;
  } else {
    event.target.style.background = '';
  }
}


/* botão de limpar a pintura dos pixels */
btnClean.addEventListener("click", clearDiv);

function clearDiv() {
  const divC = document.querySelectorAll(".div-c");
  for (let i = 0; i < divC.length; i++) {
    divC[i].style.background = "";
  }
}

/* fazendo a conatgem de quantos pixels vai ter no input */
gridHeight.addEventListener('input', () => {
  const spanGridHeight = document.querySelector('.span-grid-height');
  spanGridHeight.innerHTML = gridHeight.value;
});

gridWidth.addEventListener('input', () => {
  const spanGridWidth = document.querySelector('.span-grid-width');
  spanGridWidth.innerHTML = gridWidth.value;
})

/* adicionando o evento de click nas divs e input */
function addClickDivs() {
  for(let i = 0; i < divsColor.length; i++) {
    divsColor[i].addEventListener('click', (event) => {
      const selectColor = document.querySelector(".select");
      selectColor.classList.remove('select')
      event.target.classList.add('select');
    });
  }
}

/* sorteando as cores da paleta de cores */
function drawColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return`rgb(${r}, ${g}, ${b})`;
}

function addColorDivs() {
  for(let i = 0; i < divsColor.length-1; i++) {
    divsColor[i].style.backgroundColor = drawColor();
  }
}