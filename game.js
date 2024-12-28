let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
const gameOver = document.getElementById("game-over");

const main = (currentTime) => {
    if(isOver) {
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return;
    }

    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);

const update = () => {
    console.log("Render");
    updateSnake();
    updateFood();
    checkDead();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
