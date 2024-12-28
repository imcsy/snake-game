let inputDir = { dx:0, dy:1 };
let lastInDir = { dx:0, dy:1 };

window.addEventListener("keydown", (Event) => {
    if (Event.key === "ArrowUp" && lastInDir.dx != 0) {
        inputDir = { dx:0, dy:-1 };
    } else if (Event.key === "ArrowDown" && lastInDir.dx != 0) {
        inputDir = { dx:0, dy:1 };
    } else if (Event.key === "ArrowLeft" && lastInDir.dy != 0) {
        inputDir = { dx:-1, dy:0 };
    } else if (Event.key === "ArrowRight" && lastInDir.dy != 0) {
        inputDir = { dx:1, dy:0 };
    } 
})

const getInputDir = () => {
    lastInDir = inputDir;
    return inputDir;
}