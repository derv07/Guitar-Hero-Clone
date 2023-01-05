class Fret {
    constructor(ctx) {
        this.ctx = ctx
        this.tick = 0
        this.y = 0
        this.vy = 5
    }

    draw() {
        this.ctx.fillStyle = 'lightgray'
        this.ctx.fillRect(0, this.y, this.ctx.canvas.width, 5)
    }

    move() {
        this.y += this.vy
    }
}