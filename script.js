const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.game-message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X'; // Player X starts
let board = Array(9).fill(null);
let gameOver = false;

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (!gameOver && !board[index]) {
      // Player's move
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      cell.classList.add(`player-${currentPlayer}`);

      if (checkWin(currentPlayer)) {
        message.textContent = `Player ${currentPlayer} Wins!`;
        gameOver = true;
        disableBoard();
      } else if (board.every((cell) => cell)) {
        message.textContent = "It's a Draw!";
        gameOver = true;
      } else {
        // Switch turns
        currentPlayer = 'O'; // Now it's AI's turn
        message.textContent = "AI's Turn";
        setTimeout(aiMove, 500); // AI makes a move after a slight delay
      }
    }
  });
});

resetButton.addEventListener('click', () => {
  board.fill(null);
  currentPlayer = 'X';
  message.textContent = "Player X's Turn";
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.className = 'cell btn btn-outline-primary'; // Reset classes with Bootstrap button
  });
  enableBoard();
  gameOver = false;
});

function checkWin(player) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombos.some((combo) =>
    combo.every((index) => board[index] === player)
  );
}

function disableBoard() {
  cells.forEach((cell) => (cell.style.pointerEvents = 'none'));
}

function enableBoard() {
  cells.forEach((cell) => (cell.style.pointerEvents = 'auto'));
}

function aiMove() {
  // AI tries to block or win
  const availableMoves = board
    .map((cell, index) => (cell === null ? index : null))
    .filter((val) => val !== null);

  let move = null;

  // Check if AI can win
  move = findBestMove('O', availableMoves);
  if (move !== null) {
    board[move] = 'O';
    cells[move].textContent = 'O';
    cells[move].classList.add('player-O');
  }
  // If no winning move, block player's winning move
  else {
    move = findBestMove('X', availableMoves);
    if (move !== null) {
      board[move] = 'O';
      cells[move].textContent = 'O';
      cells[move].classList.add('player-O');
    }
  }

  // If no win or block, pick a random move
  if (move === null) {
    move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    board[move] = 'O';
    cells[move].textContent = 'O';
    cells[move].classList.add('player-O');
  }

  if (checkWin('O')) {
    message.textContent = 'AI Wins!';
    gameOver = true;
    disableBoard();
  } else if (board.every((cell) => cell)) {
    message.textContent = "It's a Draw!";
    gameOver = true;
  } else {
    // Switch back to player's turn
    currentPlayer = 'X';
    message.textContent = "Player X's Turn";
  }
}

function findBestMove(player, availableMoves) {
  const opponent = player === 'O' ? 'X' : 'O';

  // Check if there is a winning move
  for (let move of availableMoves) {
    const tempBoard = [...board];
    tempBoard[move] = player;
    if (checkWinForTempBoard(tempBoard, player)) {
      return move;
    }
  }

  // Check if the opponent has a winning move and block it
  for (let move of availableMoves) {
    const tempBoard = [...board];
    tempBoard[move] = opponent;
    if (checkWinForTempBoard(tempBoard, opponent)) {
      return move;
    }
  }

  return null;
}

function checkWinForTempBoard(tempBoard, player) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombos.some((combo) =>
    combo.every((index) => tempBoard[index] === player)
  );
}
