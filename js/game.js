class Game {
    constructor(ctx) {
        this.ctx =ctx

        this.interval = null
        this.notes = barracuda(ctx)
        this.tick = 200
        this.bg = new Background(ctx)
        this.player = new Player(ctx)
        this.doom = new Audio("assets/domp3.mp3")
        this.highestStreak = 0
        this.noteMissed = 0
        this.fret = []
        this.tick = 0
        this.songEnded = false

        
    }

    start() {
        this.initListeners()
        this.doom.play()

        this.interval = setInterval(() => {
            this.clear()
            this.addFret()
            this.draw()
            this.move()
            this.endSong()
            this.clearNote()
            this.clearStreak()
            this.scoreStreak()
            
            
        }, 1000 / 60)
    }

    stop() {
        clearInterval(this.interval)
        this.doom.pause()
    }

    draw() {
        this.bg.draw()
        this.fret.forEach(f => f.draw())
        this.notes.forEach((note) => {
            note.draw()
        })
        this.player.draw()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    clearNote() {
        this.notes = this.notes.filter(note => note.isVisible() && !note.isHitted)
    }

    clearStreak() {
        this.notes.forEach(note => {
            if (note.y > 700) {
                this.noteMissed++
                this.player.combo = 0
                this.player.multiplierHit = 0
                comboDisplay.innerText = `Streak: ${this.player.combo}`
                multiplierDisplay.innerText = `Combo: x${this.player.multiplier[this.player.multiplierHit]}`
                console.log(this.noteMissed)
            }
        })
    }

    scoreStreak() {
        if (this.player.combo > this.highestStreak) {
            this.highestStreak++
            console.log(this.highestStreak)
        }
    }

    endSong() {
        if (this.doom.currentTime >= 56.9) {
            this.doom.pause()
            clearInterval(this.interval)
            container.style.display = "none"
            endScore.style.display = "flex"
            endScore.classList.add("endScore")
            finalScore.innerText = `Score: ${this.player.score}`
            finalStreak.innerText = `Highest streak: ${this.highestStreak}`
            missedNote.innerText = `Note Missed: ${this.noteMissed}`
            let accuray = (100 * (202 - this.noteMissed) / 202)
            percent.innerText = `Accuracy: %${Math.floor(accuray * 100) / 100}`
            document.getElementById("restart-btn").style.display = "block";
        }
    }

    addFret() {
        this.tick++

        if (this.tick >= 52) {
            this.tick = 0
            this.fret.push(new Fret(this.ctx))
        }
    }

    move() {
        this.notes.forEach((note) => {
            note.move()
        })
        this.fret.forEach(f => f.move())
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
                        const result = this.notes.some(note => {
                            const hitNote = note.collidesWith(this.player.green)
                            if (hitNote) {
                                note.isHitted = true
                            } return hitNote
                        })
                            if (result) {
                            this.player.greenFret.frameIndex = 2
                            this.player.hitNote(key)
                            } else {
                            this.player.combo = 0
                            this.player.multiplierHit = 0
                            comboDisplay.innerText = `Streak: ${this.player.combo}`
                            multiplierDisplay.innerText = `Combo: x${this.player.multiplier[this.player.multiplierHit]}`

                        }
                        
                    }
                    break;
                case RED:
                    if (!this.player.red.isPressed) {
                        this.player.redFret.frameIndex = 1
                        /*this.notes.forEach(note => {
                            const collides = note.collidesWith(this.player.red)
                            if (collides) {
                                this.player.redFret.frameIndex = 2
                                this.player.hitNote(key)
                                note.isHitted = true
                            } else if (note.y > 690) {
                                this.player.combo = 0
                                this.player.multiplierHit = 0
                                comboDisplay.innerText = `Streak: ${this.player.combo}`
                            }
                        })*/
                        const result = this.notes.some(note => {
                            const hitNote = note.collidesWith(this.player.red)
                            if (hitNote) {
                                note.isHitted = true
                            }
                            return hitNote
                        })
                        if (result) {
                            this.player.redFret.frameIndex = 2
                            this.player.hitNote(key)
                        } else {
                            this.player.combo = 0
                            this.player.multiplierHit = 0
                            comboDisplay.innerText = `Streak: ${this.player.combo}`
                            multiplierDisplay.innerText = `Combo: x${this.player.multiplier[this.player.multiplierHit]}`

                        }
                    }
                    break;
                case YELLOW:
                    if (!this.player.yellow.isPressed) {
                        this.player.yellowFret.frameIndex = 1
                        /*this.notes.forEach(note => {
                            const collides = note.collidesWith(this.player.yellow)
                            if (collides) {
                                this.player.yellowFret.frameIndex = 2
                                this.player.hitNote(key)
                                note.isHitted = true
                            } else if (note.y > 690) {
                                this.player.combo = 0
                                this.player.multiplierHit = 0
                                comboDisplay.innerText = `Streak: ${this.player.combo}`
                            }
                        })*/
                        const result = this.notes.some(note => {
                            const hitNote = note.collidesWith(this.player.yellow)
                            if (hitNote) {
                                note.isHitted = true
                            } return hitNote
                        })
                        if (result) {
                            this.player.yellowFret.frameIndex = 2
                            this.player.hitNote(key)
                        } else {
                            this.player.combo = 0
                            this.player.multiplierHit = 0
                            comboDisplay.innerText = `Streak: ${this.player.combo}`
                            multiplierDisplay.innerText = `Combo: x${this.player.multiplier[this.player.multiplierHit]}`

                        }
                    }
                    break;
                case BLUE:
                    if (!this.player.blue.isPressed) {
                        this.player.blueFret.frameIndex = 1
                        /*this.notes.forEach(note => {
                            const collides = note.collidesWith(this.player.blue)
                            if (collides) {
                                this.player.blueFret.frameIndex = 2
                                this.player.hitNote(key)
                                note.isHitted = true
                            } else if (note.y > 690) {
                                this.player.combo = 0
                                this.player.multiplierHit = 0
                                comboDisplay.innerText = `Streak: ${this.player.combo}`
                            }
                        })*/
                        const result = this.notes.some(note => {
                            const hitNote = note.collidesWith(this.player.blue)
                            if (hitNote) {
                                note.isHitted = true
                            } return hitNote
                        })
                        if (result) {
                            this.player.blueFret.frameIndex = 2
                            this.player.hitNote(key)
                        } else {
                            this.player.combo = 0
                            this.player.multiplierHit = 0
                            comboDisplay.innerText = `Streak: ${this.player.combo}`
                            multiplierDisplay.innerText = `Combo: x${this.player.multiplier[this.player.multiplierHit]}`

                        }
                    }
                    break;
                case ORANGE:
                    if (!this.player.orange.isPressed) {
                        this.player.orangeFret.frameIndex = 1
                        /*this.notes.forEach(note => {
                            const collides = note.collidesWith(this.player.orange)
                            if (collides) {
                                this.player.orangeFret.frameIndex = 2
                                this.player.hitNote(key)
                                note.isHitted = true
                            } else if (note.y > 690) {
                                this.player.combo = 0
                                this.player.multiplierHit = 0
                                comboDisplay.innerText = `Streak: ${this.player.combo}`
                            }
                        })*/
                        const result = this.notes.some(note => {
                            const hitNote = note.collidesWith(this.player.orange)
                            if (hitNote) {
                                note.isHitted = true
                            } return hitNote
                        })
                        if (result) {
                            this.player.orangeFret.frameIndex = 2
                            this.player.hitNote(key)
                        } else {
                            this.player.combo = 0
                            this.player.multiplierHit = 0
                            comboDisplay.innerText = `Streak: ${this.player.combo}`
                            multiplierDisplay.innerText = `Combo: x${this.player.multiplier[this.player.multiplierHit]}`

                        }
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