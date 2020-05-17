var player1 = "X";
var player2 = "O";
let currentPlayer = player1;
var moves;
var j;
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]



let cells = document.querySelectorAll('.row > div');
console.log(cells);

 for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked, { once: true })
} 

function cellClicked () {
    event.target.textContent = 'X'
} 

function cellClicked() {
    if (currentPlayer == player1) {
      event.target.textContent = currentPlayer;
      currentPlayer = player2;
  
  
      if (checkWin(player1)) {
        console.log("X wins!");
  
  
        for (var i = 0; i < cells.length; i++) {
          cells[i].removeEventListener('click', cellClicked, { once: true })
        }
  
        for (var i = 0; i < cells.length; i++) {
          cells[i].addEventListener('click', reset)
  
        }
  
        function reset() {
          cells[i].textContent = window.location.reload(true);
  
        }
      }
  
    } else {
      currentPlayer == player2;
      event.target.textContent = currentPlayer;
      currentPlayer = player1;
  
  
      if (checkWin(player2)) {
  
        console.log("O Wins!");
  
        for (var i = 0; i < cells.length; i++) {
          cells[i].removeEventListener('click', cellClicked, { once: true })
        }
        for (var i = 0; i < cells.length; i++) {
          cells[i].addEventListener('click', reset)
  
        }
        function reset() {
          cells[i].textContent = window.location.reload(true);
        }
  
      }
    }
  
  } 

