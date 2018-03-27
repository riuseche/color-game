var numButtons = 6
var colors = randomColorGenerator(numButtons);
var squares = document.getElementsByClassName('square')
var pickedColor = randomPickedColor();
var goalColor = document.getElementById('goalColor');
var topMessage = document.getElementById('topMessage');
var gameHead = document.querySelector('#gameHead');
var resetButton = document.querySelector('#resetButton');
var easyButton = document.getElementById('easyButton');
var hardButton = document.getElementById('hardButton');

easyButton.addEventListener('click', function(){
  numButtons = 3
  colors = randomColorGenerator(numButtons);
  pickedColor = randomPickedColor();
  // Change display color to match pickedColor
  goalColor.textContent = pickedColor;
  // Change square colors
  for(var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  gameHead.style.backgroundColor = 'rgb(1, 1, 1)';
  this.classList.add('selected')
  hardButton.classList.remove('selected')
})

hardButton.addEventListener('click', function(){
  numButtons = 6
  colors = randomColorGenerator(numButtons);
  pickedColor = randomPickedColor();
  // Change display color to match pickedColor
  goalColor.textContent = pickedColor;
  // Change square colors
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block'
  }
  gameHead.style.backgroundColor = 'rgb(1, 1, 1)';
  this.classList.add('selected')
  easyButton.classList.remove('selected')
})

resetButton.addEventListener('click', function(){
  colors = randomColorGenerator(numButtons);
  // Assign new Colors
  pickedColor = randomPickedColor();
  // Change display color to match pickedColor
  goalColor.textContent = pickedColor;
  topMessage.textContent = '';
  // Change square colors
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  gameHead.style.backgroundColor = 'rgb(1, 1, 1)';
})

goalColor.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // Initial colors added to squares.
  squares[i].style.backgroundColor = colors[i];
  // Adding click listeners to squares.
  squares[i].addEventListener('click', function(){
    // Determine the color of clicked square.
    var clickedColor = this.style.backgroundColor;
    // Comparec clicked color
    if(clickedColor === pickedColor){
      topMessage.textContent = 'Correct!';
      resetButton.textContent = 'Play Again?'
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = '#232323';
      topMessage.textContent = 'Try Again!';
    }
  });
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
  return 'rgb('+ red + ', ' + green + ', '+ blue + ')'
}
