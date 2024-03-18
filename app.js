const playBoard = document.querySelector(".play-board"),
  food = document.querySelector(".food"),
  head = document.querySelector(".head");

let score = document.querySelector('.score b')
let highScore = document.querySelector('.high-score')

console.log(score);

let velocityX = 0, velocityY = 0;

let foodX, foodY;
let snakeX = 6, snakeY = 15;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 50) + 1;
  foodY = Math.floor(Math.random() * 50) + 1;
}

const changeDiection = (e) => {
  if (e.key === 'ArrowRight') {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === 'ArrowLeft') {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === 'ArrowDown') {
    velocityX = 1;
    velocityY = 0;
  } else if (e.key === 'ArrowUp') {
    velocityX = -1;
    velocityY = 0;
  }
}

const initGame = () => {
  if (snakeX === foodX && snakeY === foodY) {
    let ball = +score.textContent
    ball++
    score.textContent = ball
    changeFoodPosition();
  }
  food.setAttribute("style", `grid-area:${foodX}/${foodY}`);
  snakeX += velocityX;
  snakeY += velocityY;
  if (snakeX === 51) snakeX = 1
  else if (snakeX === 0) snakeX = 51
  else if (snakeY === 51) snakeY = 1
  else if (snakeY === 0) snakeY = 51
  head.setAttribute("style", `grid-area:${snakeX}/${snakeY}`)
}
changeFoodPosition();
setInterval(initGame, 150);
document.addEventListener('keydown', changeDiection

)





