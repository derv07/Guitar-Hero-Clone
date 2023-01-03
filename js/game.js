class Game {
    constructor(ctx) {
        this.ctx =ctx

        this.interval = null
        this.notes = barracuda(ctx)
        this.tick = 200
        this.bg = new Background(ctx)
        this.player = new Player(ctx)
        this.doom = new Audio("/assets/domp3.mp3")

    }

    start() {
        this.initListeners()
        this.doom.play()

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
            switch(key) {
                case GREEN:
                    if (!this.player.green.isPressed) {
                        this.player.greenFret.frameIndex = 1
                        this.notes = this.notes.filter(note => {
                            const collides = note.collidesWith(this.player.green)
                            if (collides) {
                                this.player.greenFret.frameIndex = 2
                                this.player.hitNote(key)
                            }
                            return !collides
                        })
                    }
                    break;
                case RED:
                    if (!this.player.red.isPressed) {
                        this.player.redFret.frameIndex = 1
                        this.notes = this.notes.filter(note => {
                            const collides = note.collidesWith(this.player.red)
                            if (collides) {
                                this.player.redFret.frameIndex = 2
                                this.player.hitNote(key)
                            }
                            return !collides
                        })
                    }
                    break;
                case YELLOW:
                    if (!this.player.yellow.isPressed) {
                        this.player.yellowFret.frameIndex = 1
                        this.notes = this.notes.filter(note => {
                            const collides = note.collidesWith(this.player.yellow)
                            if (collides) {
                                this.player.yellowFret.frameIndex = 2
                                this.player.hitNote(key)
                            }
                            return !collides
                        })
                    }
                    break;
                case BLUE:
                    if (!this.player.blue.isPressed) {
                        this.player.blueFret.frameIndex = 1
                        this.notes = this.notes.filter(note => {
                            const collides = note.collidesWith(this.player.blue)
                            if (collides) {
                                this.player.blueFret.frameIndex = 2
                                this.player.hitNote(key)
                            }
                            return !collides
                        })
                    }
                    break;
                case ORANGE:
                    if (!this.player.orange.isPressed) {
                        this.player.orangeFret.frameIndex = 1
                        this.notes = this.notes.filter(note => {
                            const collides = note.collidesWith(this.player.orange)
                            if (collides) {
                                this.player.orangeFret.frameIndex = 2
                                this.player.hitNote(key)
                            }
                            return !collides
                        })
                    }
                    break;
            }
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