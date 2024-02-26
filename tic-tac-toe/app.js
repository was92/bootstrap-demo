let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'X';
let movesMade = 0;
let gameIsActive = true;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked, { once: true });
}

function cellClicked(event) {
    if (!gameIsActive) return;

    event.target.textContent = currentPlayer;
    movesMade++;
    if (checkWinner(currentPlayer)) {
        alert(`Winner: ${currentPlayer}`);
        gameIsActive = false;
    } else if (movesMade === 9) {
        alert("Draw");
        gameIsActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    return winConditions.some(condition => {
        return condition.every(index => {
            return cells[index].textContent === player;
        });
    });
}

document.getElementById('board').addEventListener('click', () => {
    if (!gameIsActive) resetGame();
});

function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        cells[i].addEventListener('click', cellClicked, { once: true });
    }
    currentPlayer = 'X';
    movesMade = 0;
    gameIsActive = true;
}
