class Snake {
    constructor() {
        this.pos = new Vector(width / 2, height / 2)
        this.vel = new Vector(0, 0)
        this.size = 40
        this.tail = []
        this.total = 0
    }
    draw() {
        ctx.fillStyle = '#F92672'
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 3
        for (const t of this.tail) {
            ctx.fillRect(t.x, t.y, this.size, this.size)
            ctx.strokeRect(t.x, t.y, this.size, this.size)
        }

        ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size)
        ctx.strokeRect(this.pos.x, this.pos.y, this.size, this.size)
    }
    update() {
        if (this.total === this.tail.length)
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1]
            }
        this.tail[this.total - 1] = new Vector(this.pos.x, this.pos.y)
        this.pos.add(this.vel.mult(this.size))
        if (this.pos.x < 0) {
            this.die()
        } else {
            if (this.pos.x > width - this.size)
                this.die()
        }
        if (this.pos.y < 0) {
            this.die()
        } else {
            if (this.pos.y > height - this.size)
                this.die()
        }
        let die = false
        for (const tailPiece of this.tail) {
            if (tailPiece.x === this.pos.x && tailPiece.y === this.pos.y) {
                die = true
            }
        }
        if (die) {
            this.die()
        }
        if (this.pos.distance(apple.pos) < 10) {
            apple.eaten()
            this.total++
                new Audio('./sounds/appleBite.mp3').play()
            console.log(`Score: ${this.total}`);

        }
    }
    die() {
        this.total = 0
        this.tail = []
        this.pos = new Vector(width / 2, height / 2)
        apple.eaten()
        console.log("You died");
    }


}

class Apple {
    constructor() {
        this.size = 40
        this.pos = new Vector(pickInsideGrid(this.size, width - 40), pickInsideGrid(this.size, height - 40))
    }
    draw() {
        ctx.fillStyle = '#ff0000'
        ctx.strokeStyle = '#000'
        ctx.lineWidth = 3
        ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size)
        ctx.strokeRect(this.pos.x, this.pos.y, this.size, this.size)
    }
    eaten() {
        this.pos = new Vector(pickInsideGrid(this.size, width), pickInsideGrid(this.size, height))
    }
}

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add(vector) {
        this.x += vector.x
        this.y += vector.y
    }
    mult(val) {
        return new Vector(this.x * val, this.y * val)
    }
    sub(vector) {
        this.x -= vector.x
        this.y -= vector.y
    }

    distance(vector) {
        return Math.sqrt(Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2))
    }
}

function pickInsideGrid(size, max) {
    return size * Math.abs((Math.round(Math.floor(max / size) * Math.random()) - 1))
}