const food = {x:15, y:15};

const updateFood = () => {
    if(isEating){
        food.x = getRandom(1,21);
        food.y = getRandom(1,21);
    }
}

const drawFood = (gameBoard) => {
    if (isEating) {
        isEating = false;
    } else {
        const foodEle = document.createElement("div");
        foodEle.style.gridRowStart = food.y;
        foodEle.style.gridColumnStart = food.x;
        foodEle.classList.add("food");
        gameBoard.appendChild(foodEle);
        console.log("draw food");
    }
}

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}