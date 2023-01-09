var paletteColors = document.querySelectorAll(".color");
var pixels = document.querySelectorAll(".pixel");

function loadPalette() {
  var colorPalette = localStorage.getItem("colorPalette");

  if (colorPalette !== null) {
    var colors = JSON.parse(colorPalette);
    console.log(`Palette Loaded: ${colors}`);
    applyPalette(colors);
  } else {
    generatePalette();
  }
}

function savePalette(colors) {
  localStorage.setItem("colorPalette", JSON.stringify(colors));
  console.log(`Palette Saved: ${colors}`);
}

function applyPalette(colors) {
  var palette = document.querySelectorAll(".color");
  for (let i = 0; i < 4; i++) {
    palette[i].style.background = colors[i];
  }
}

function generatePalette() {
  //TODO generate random colors
  var colors = [];
  colors.push("#000000");
  while (colors.length < 4) {
    var newColor = generateRandomColor();
    if (colors.indexOf(newColor) === -1 && newColor != "#FFFFFF")
      colors.push(newColor);
  }

  applyPalette(colors);
  savePalette(colors);
}

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function selectColor(colorElement) {
  selectedColor.classList.remove("selected");
  selectedColor = colorElement;
  selectedColor.classList.add("selected");
}

function clearBoard() {
  for (let i = 0; i < pixels.length; i++) {
    const element = pixels[i];
    element.style.background = "#FFFFFF";
  }

  saveBoard();
}

function saveBoard() {
  var board = [];
  for (let i = 0; i < pixels.length; i++) {
    const element = pixels[i];
    board.push(element.style.background);
  }

  console.log(JSON.stringify(board));
  localStorage.setItem("pixelBoard", JSON.stringify(board));
}

function loadBoard() {
  var pixelBoard = localStorage.getItem("pixelBoard");

  if (pixelBoard !== null) {
    var board = JSON.parse(pixelBoard);
    console.log(`Loaded Board: ${board}`);
    for (let i = 0; i < board.length; i++) {
        const element = board[i];
        pixels[i].style.background = element;
    }
  }
}

loadPalette();
loadBoard();

var selectedColor = paletteColors[0];
selectColor(paletteColors[0]);

for (let i = 0; i < paletteColors.length; i++) {
  const element = paletteColors[i];
  element.onclick = function () {
    selectColor(element);
  };
}

for (let i = 0; i < pixels.length; i++) {
  const element = pixels[i];
  element.onclick = function () {
    element.style.background = selectedColor.style.background;
    saveBoard();
  };
}
