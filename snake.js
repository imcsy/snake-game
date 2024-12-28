// TODO: fill me in!
const SNAKE_SPEED = 6;
const snakeBody = [
    {x:11, y:11},
    {x:11, y:10},
    {x:11, y:9}
];
const lastLastSeg = {x:11, y:9};
let isEating = false;
let isOver = false;

const updateSnake = () => {
    saveLast();
    for(let i = snakeBody.length - 2; i >= 0; i--){
          snakeBody[i+1] = { ...snakeBody[i]};
    }
    snakeBody[0].x += getInputDir().dx;
    snakeBody[0].y += getInputDir().dy;
    
    if( snakeBody[0].x === food.x && snakeBody[0].y === food.y ) {
        eatFood();
    }
}

const saveLast = () => {
    let l = snakeBody.length;
    lastLastSeg.x = snakeBody[l-1].x;
    lastLastSeg.y = snakeBody[l-1].y;
}

const drawSnake = (gameBoard) => {
    for(let i = 0; i < snakeBody.length; i++){
        const segment = snakeBody[i];
        const snakeEle = document.createElement("div");
        snakeEle.style.gridRowStart = segment.y;
        snakeEle.style.gridColumnStart = segment.x;
        snakeEle.classList.add("snake");
        gameBoard.appendChild(snakeEle);
    }
}

const eatFood = () => {
    increaseBody();
    isEating = true;
}

const increaseBody = () => {
    snakeBody.push( { x:lastLastSeg.x, y:lastLastSeg.y } );
}

const checkDead = () => {
    checkBoarder();
    checkSelf();

    if(isOver) {
         Swal.fire({
            title: 'Game Over!',
            text: 'Your score is ' + (snakeBody.length-3),
            icon: 'error', 
            confirmButtonText: 'RESTART', 
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload(); 
            }
        });
    }
}

const checkBoarder = () => {
    if( snakeBody[0].x < 1 || snakeBody[0].x > 21 || snakeBody[0].y < 1 || snakeBody[0].y > 21 ) {
        isOver = true;
    }
}

const checkSelf = () => {
    for(let i = 1; i < snakeBody.length; i++) {
        if ( snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y){
            isOver = true;
            return;
        }
    }
}