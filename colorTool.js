var colors = randomColorGenerator(6);
var squares = document.getElementsByClassName('square')
var pickedColor = randomPickedColor();
var goalColor = document.getElementById('goalColor');
var topMessage = document.getElementById('topMessage');
var gameHead = document.querySelector('#gameHead');

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
      topMessage.textContent = 'You guessed right!';
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
