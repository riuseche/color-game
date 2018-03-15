var colors = [
  "rgb(255, 10, 10)",
  "rgb(0, 10, 10)",
  "rgb(50, 10, 30)",
  "rgb(25, 255, 80)",
  "rgb(38, 100, 100)",
  "rgb(0, 255, 255)",
]

var squares = document.getElementsByClassName('square')

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
}
