var colors = [
  'rgb(255, 10, 10)',
  'rgb(0, 10, 10)',
  'rgb(50, 10, 30)',
  'rgb(25, 255, 80)',
  'rgb(38, 100, 100)',
  'rgb(0, 255, 255)',
]
var squares = document.getElementsByClassName('square')
var pickedColor = colors[3];
var goalColor = document.getElementById('goalColor');

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
      alert('Correct');
    } else {
      alert('wrong');
    }
  });
}
