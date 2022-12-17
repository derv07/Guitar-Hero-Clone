class Note {
    constructor(ctx, x, y, color, h) {
        this.ctx = ctx    
        this.x = x
        this.y = y
        this.color = color
        this.vy = NOTE_VY
        this.w = NOTE_W
        this.h = h
        this.isHittable = false
    }

    draw() {
        this.ctx.save()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.restore()
    }

    move() {
        this.y += this.vy
    }

    canHit() {
        if (this.y + this.h > this.ctx.canvas.height - 40 && this.y < this.ctx.canvas.height - 10) {
            return this.isHittable = true
        }
    }

    isHitted() {
        
    }
}