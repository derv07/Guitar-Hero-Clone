class Game {
    constructor(ctx) {
        this.ctx =ctx

        this.interval = null
        this.notes = barracuda(ctx)
        this.tick = 200
        this.bg = new Background(ctx)
        this.player = new Player(ctx)

    }

    start() {
        this.initListeners()

        this.interval = setInterval(() => {
            this.clear()
            this.draw()
            this.move()
            this.onKeyDown()
            console.log(this.notes.length)
        }, 1000 / 60)
    }

    draw() {
        this.bg.draw()
        this.notes.forEach((note) => {
            note.draw()
        })
        this.player.draw()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    move() {
        this.notes.forEach((note) => {
            note.move()
        })
    }

    initListeners() {
        document.onkeydown = (key) => {
            this.onKeyDown(key.keyCode)
        }
    }

    onKeyDown(key) {
        switch(key) {
            case GREEN:
                this.player.hitNote(key)
                break;
            case RED:
                this.player.hitNote(key)
                break;
            case YELLOW:
                this.player.hitNote(key)
                break;
            case BLUE:
                this.player.hitNote(key)
                break;
            case ORANGE:
                this.player.hitNote(key)
                break;
        }
    }

    isNoteHitted() {
        return this.notes.forEach((note) => {
            note.y + note.h > this.ctx.canvas.height - 40 && note.y < this.ctx.canvas.height - 10
        })
    }
}