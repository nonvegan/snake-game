const canvas = document.getElementById('canvas')
const scoreDisplay = document.getElementById('score')
const maxScoreDisplay = document.getElementById('maxScore')
const ctx = canvas.getContext('2d')

if (!Cookies.get('maxScore'))
    Cookies.set('maxScore', 0)

document.addEventListener('keydown', (key) => {
    if (key.key === "ArrowUp" && snake.vel.y != 1) {
        snake.vel.x = 0
        snake.vel.y = -1
    } else if (key.key === "ArrowRight" && snake.vel.x != -1) {
        snake.vel.x = 1
        snake.vel.y = 0
    } else if (key.key === "ArrowDown" && snake.vel.y != -1) {
        snake.vel.x = 0
        snake.vel.y = 1
    } else if (key.key === "ArrowLeft" && snake.vel.x != 1) {
        snake.vel.x = -1
        snake.vel.y = 0
    }
})
const width = 800
const height = 800
canvas.width = width
canvas.height = height
maxScoreDisplay.textContent = `Max Score: ${Cookies.get('maxScore')}`
const snake = new Snake()
const apple = new Apple()

function update() {
    ctx.clearRect(0, 0, width, height)
    snake.draw()
    apple.draw()
    snake.update()
}
setInterval(() => {
    update()
}, getMs(15));