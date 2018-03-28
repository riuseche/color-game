var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName('square');
var goalColor = document.getElementById('goalColor');
var topMessage = document.getElementById('topMessage');
var gameHead = document.querySelector('#gameHead');
var resetButton = document.querySelector('#resetButton');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
  setUpButtons();
  setUpSquares();
  reset();
}

function setUpButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
    // Adding click listeners to squares.
    squares[i].addEventListener('click', function(){
      // Determine the color of clicked square.
      var clickedColor = this.style.backgroundColor;
      // Comparec clicked color
      if(clickedColor === pickedColor){
        topMessage.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = '#232323';
        topMessage.textContent = 'Try Again!';
      }
    });
  }
}

function reset(){
  colors = randomColorGenerator(numSquares);
  // Assign new Colors
  pickedColor = randomPickedColor();
  // Change display color to match pickedColor
  goalColor.textContent = pickedColor;
  topMessage.textContent = '';
  gameHead.style.backgroundColor = 'rgb(1, 1, 1)';
  resetButton.textContent = 'New Colors';
  // Change square colors
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'None';
    }
  }
}

function changeColors(color){
  // loop through all the squares.
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  gameHead.style.backgroundColor = color;
}

function randomPickedColor(){
  // Pick a random color
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColorGenerator(num){
  // Generate array
  var arr = [];
  // Add random rgb values to array using separate function
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  // return array to var colors
  return arr;
}

function randomColor(){
  // pick a value for each RGB place
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  return 'rgb('+ red + ', ' + green + ', '+ blue + ')';
}

resetButton.addEventListener('click', function(){
  reset();
});
