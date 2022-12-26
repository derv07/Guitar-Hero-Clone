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
        this.isHitted = false
        this.img = new Image()
        this.img.src = "/assets/notes.png"
        this.img.frames = 5
        this.isPressed = false

        switch(color) {
            case 'green':
                this.img.frameIndex = 0
                break;
            case 'red':
                this.img.frameIndex = 1
                break;
            case 'yellow':
                this.img.frameIndex = 2
                break;
            case 'blue':
                this.img.frameIndex = 3
                break;
            case 'orange':
                this.img.frameIndex = 4
                break;
        }
    }

    draw() {
        this.ctx.drawImage(this.img, this.img.frameIndex * this.img.width / this.img.frames, 0, this.img.width / this.img.frames,
        this.img.height, this.x, this.y, this.w, this.h)
    }

    move() {
        this.y += this.vy
    }

    collidesWith(fret) {
        if (this.x < fret.x + fret.w &&
            this.x + this. w > fret.x &&
            this.y < fret.y + fret.h &&
            this.y + this.h > fret.y) {
                return true
            } else {
                return false
            }
    }
}