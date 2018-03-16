var colors = [
  'rgb(255, 10, 10)',
  'rgb(0, 10, 10)',
  'rgb(50, 10, 30)',
  'rgb(25, 255, 80)',
  'rgb(38, 100, 100)',
  'rgb(0, 255, 255)',
]
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
