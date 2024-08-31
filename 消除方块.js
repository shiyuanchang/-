const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F033', '#FF33F0'];
const numSquares = 81; // 9x9 grid
const gameBoard = document.getElementById('gameBoard');
let selectedSquares = [];

// 初始化游戏板
function initGame() {
    gameBoard.innerHTML = '';
    const squares = [];
    for (let i = 0; i < numSquares; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        squares.push(color);
    }
    squares.forEach(color => {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = color;
        square.addEventListener('click', () => handleSquareClick(square, color));
        gameBoard.appendChild(square);
    });
}

// 处理方块点击事件
function handleSquareClick(square, color) {
    if (selectedSquares.length === 0) {
        selectedSquares.push({ square, color });
        square.classList.add('selected');
    } else {
        if (selectedSquares[0].color === color) {
            document.querySelectorAll(`.square[style="background-color: ${color};"]`).forEach(sq => sq.remove());
        } else {
            selectedSquares.forEach(({ square }) => square.classList.remove('selected'));
        }
        selectedSquares = [];
    }
}

// 绑定重置按钮事件
document.getElementById('resetButton').addEventListener('click', initGame);

// 启动游戏
initGame();

