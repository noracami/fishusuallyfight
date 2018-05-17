// set grid rows and columns and the size of each square
const rows = 5;
const cols = 9;
const squareSize = 60;

var debugconsole_counter = 0;
function debugconsole(name){
  debugconsole_counter++;
  console.log(
    "\n#",
    debugconsole_counter,
    " : ",
    name,
    "\n"
  );
  return;
}

function createSquare() {
  debugconsole("createSquare");

  // get the container element
  let gameBoardContainer = document.getElementById("gameboard");

  // make the grid columns and rows
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {

      // create a new div HTML element for each grid square and make it the right size
      let square = document.createElement("div");
      gameBoardContainer.appendChild(square);

      // give each div element a unique id based on its row and column, like "s00"
      square.id = 's-' + j + '-' + i;

      // set each grid square's coordinates: multiples of the current row or column number
      let topPosition = j * squareSize;
      let leftPosition = i * squareSize;

      // use CSS absolute positioning to place each grid square on the page
      square.style.top = topPosition + 'px';
      square.style.left = leftPosition + 'px';

      if (i == 0) {
        $(square).addClass("tide_runner");
      }
      else {
        $(square).addClass("square");
      }
      $(square).text("("+j+","+i+")");
    }
  }
}

// main flow
$(document).ready(function(){
  if (("player_name" in localStorage) == false || localStorage["player_name"] == "null") {
    localStorage["player_name"] = prompt("Please enter your name", "Harry Potter");
  } else {
    console.log(localStorage["player_name"]);
  }
  $("#demo").html("Hello " + localStorage["player_name"] + "! How are you today?");
  createSquare();
  //console.log($(location).attr('href'));
});