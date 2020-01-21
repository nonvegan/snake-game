const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
document.addEventListener('keydown', (key) => {
    if (key.key === "ArrowUp") {

        if (snake.vel.y != 1) {
            snake.vel.x = 0
            snake.vel.y = -1
        }
    } else {
        if (key.key === "ArrowRight") {
            if (snake.vel.x != -1) {
                snake.vel.x = 1
                snake.vel.y = 0
            }
        } else {
            if (key.key === "ArrowDown") {
                if (snake.vel.y != -1) {
                    snake.vel.x = 0
                    snake.vel.y = 1
                }
            } else {
                if (key.key === "ArrowLeft") {
                    if (snake.vel.x != 1) {
                        snake.vel.x = -1
                        snake.vel.y = 0
                    }
                } else {
                    if (key.key === "Escape") {
                        snake.vel.x = 0
                        snake.vel.y = 0
                    }
                }
            }
        }
    }
})
const width = 800
const height = 800
canvas.width = width
canvas.height = height
const snake = new Snake
let apple = new Apple

function update() {
    ctx.clearRect(0, 0, width, height)
    snake.update()
    snake.draw()
    apple.draw()
}
setInterval(() => {
    update()
}, getMs(15));