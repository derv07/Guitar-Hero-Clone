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
        this.notes
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
        document.onkeypress = (key) => {
            this.onKeyPress(key.keyCode)
        }
        document.onkeyup = (key) => {
            this.onKeyUp(key.keyCode)
        }
    }

    onKeyDown(key) {
        this.notes.forEach((note) => {
            switch(key) {
                case GREEN:
                    this.player.greenFret.frameIndex = 1
                    if (note.collidesWith(this.player.green)) {
                        this.player.greenFret.frameIndex = 2
                        this.player.hitNote(key)
                        note.isHitted = true
                    }
                    break;
                case RED:
                    this.player.redFret.frameIndex = 1
                    if (note.collidesWith(this.player.red)) {
                        this.player.redFret.frameIndex = 2
                        this.player.hitNote(key)
                    }   
                    break;
                case YELLOW:
                    this.player.yellowFret.frameIndex = 1
                    if (note.collidesWith(this.player.yellow)) {
                        this.player.yellowFret.frameIndex = 2
                        this.player.hitNote(key)
                    }
                    break;
                case BLUE:
                    this.player.blueFret.frameIndex = 1
                    if (note.collidesWith(this.player.blue)) {
                        this.player.blueFret.frameIndex = 2
                        this.player.hitNote(key)
                    }
                    break;
                case ORANGE:
                    this.player.orangeFret.frameIndex = 1
                    if (note.collidesWith(this.player.orange)) {
                        this.player.orangeFret.frameIndex = 2
                        this.player.hitNote(key)
                    }
                    break;
            }
        })
        
    }

    onKeyPress(key) {

    }

    onKeyUp(key) {
        switch(key) {
            case GREEN:
                this.player.greenFret.frameIndex = 0
                break;
            case RED:
                this.player.redFret.frameIndex = 0
                break;
            case YELLOW:
                this.player.yellowFret.frameIndex = 0
                break;
            case BLUE:
                this.player.blueFret.frameIndex = 0
                break;
            case ORANGE:
                this.player.orangeFret.frameIndex = 0
                break;
        }
    }
}