class Player {
    constructor (ctx) {
        this.ctx = ctx

        this.green = new Note (ctx, 10, FRETY, 'green', 40)
        this.red = new Note (ctx, 110, FRETY, 'red', 40)
        this.yellow = new Note (ctx, 210, FRETY, 'yellow', 40)
        this.blue = new Note (ctx, 310, FRETY, 'blue', 40)
        this.orange = new Note (ctx, 410, FRETY, 'orange', 40)

        this.score = 0
        this.multiplier = [1, 1.25, 1.5, 1.75, 2]
        this.multiplierHit = 0
        this.combo = 0
        this.percentHitted = 0

        //Fire effect
        this.fireEffect = new Image()
        this.fireEffect.src = "../assets/fireeffect.png"
        this.fireEffect.frames = 4
        this.fireEffect.frameIndex = 3
        this.fireEffect.tick = 0

        //GREEN NOTE FRET
        this.greenFret = new Image()
        this.greenFret.src = "../assets/greenfret.png"
        this.greenFret.frames = 3
        this.greenFret.frameIndex = 0

        //RED NOTE FRET
        this.redFret = new Image()
        this.redFret.src = "../assets/redfret.png"
        this.redFret.frames = 3
        this.redFret.frameIndex = 0

        //YELLOW NOTE FRET
        this.yellowFret = new Image()
        this.yellowFret.src = "../assets/yellowfret.png"
        this.yellowFret.frames = 3
        this.yellowFret.frameIndex = 0

        //BLUE NOTE FRET
        this.blueFret = new Image()
        this.blueFret.src = "../assets/bluefret.png"
        this.blueFret.frames = 3
        this.blueFret.frameIndex = 0

        // ORANGE NOTE FRET
        this.orangeFret = new Image()
        this.orangeFret.src = "../assets/orangefret.png"
        this.orangeFret.frames = 3
        this.orangeFret.frameIndex = 0
    }

    draw() {
        this.ctx.drawImage(this.greenFret, 0, this.greenFret.frameIndex * this.greenFret.height / this.greenFret.frames, this.greenFret.width, this.greenFret.height / this.greenFret.frames, this.green.x, FRETY, 80, 40)
    
        this.ctx.drawImage(this.redFret, 0, this.redFret.frameIndex * this.redFret.height / this.redFret.frames, this.redFret.width, this.redFret.height / this.redFret.frames, this.red.x, FRETY, 80, 40)

        this.ctx.drawImage(this.yellowFret, 0, this.yellowFret.frameIndex * this.yellowFret.height / this.yellowFret.frames, this.yellowFret.width, this.yellowFret.height / this.yellowFret.frames, this.yellow.x, FRETY, 80, 40)

        this.ctx.drawImage(this.blueFret, 0, this.blueFret.frameIndex * this.blueFret.height / this.blueFret.frames, this.blueFret.width, this.blueFret.height / this.blueFret.frames, this.blue.x, FRETY, 80, 40)

        this.ctx.drawImage(this.orangeFret, 0, this.orangeFret.frameIndex * this.orangeFret.height / this.orangeFret.frames, this.orangeFret.width, this.orangeFret.height / this.orangeFret.frames, this.orange.x, FRETY, 80, 40)
    }

    onKeyDown(key) {
        switch (key.keyCode) {
            case GREEN:
                this.green.isPressed = true
                break;
            case RED:
                this.red.isPressed = true
                break;
            case YELLOW:
                this.yellow.isPressed = true
                break;
            case BLUE:
                this.blue.isPressed = true
                break;
            case ORANGE:
                this.orange.isPressed = true
                break;
        }
    }

   onKeyUp(key) {
        switch (key.keyCode) {
            case GREEN:
                this.green.isPressed = false
                break;
            case RED:
                this.red.isPressed = false
                break;
            case YELLOW:
                this.yellow.isPressed = false
                break;
            case BLUE:
                this.blue.isPressed = false
                break;
            case ORANGE:
                this.orange.isPressed = false
                break;
        }
   }
    

    playerScore() {

    }

    playerCombo() {

    }

    hitNote(key) {
        ++this.combo
        if (this.combo % 5 === 0 && this.multiplierHit < 4 && this.combo > 0) {
            this.multiplierHit++
        }
        switch (key) {
            case GREEN:
                comboDisplay.innerText = `Streak: ${this.combo}`
                scoreDisplay.innerText = `Score: ${this.score += 5 * this.multiplier[this.multiplierHit]}`
                multiplierDisplay.innerText = `Combo: x${this.multiplier[this.multiplierHit]}`
                //note.isHitted = true
                break;                        
            case RED:
                comboDisplay.innerText = `Streak: ${this.combo}`
                scoreDisplay.innerText = `Score: ${this.score += 5 * this.multiplier[this.multiplierHit]}`
                multiplierDisplay.innerText = `Combo: x${this.multiplier[this.multiplierHit]}`

                //note.isHitted = true
                break;
            case YELLOW:                            
                comboDisplay.innerText = `Streak: ${this.combo}`
                scoreDisplay.innerText = `Score: ${this.score += 5 * this.multiplier[this.multiplierHit]}`
                multiplierDisplay.innerText = `Combo: x${this.multiplier[this.multiplierHit]}`

                //note.isHitted = true
                break;
            case BLUE:                            
                comboDisplay.innerText = `Streak: ${this.combo}`
                scoreDisplay.innerText = `Score: ${this.score += 5 * this.multiplier[this.multiplierHit]}`
                multiplierDisplay.innerText = `Combo: x${this.multiplier[this.multiplierHit]}`

                //note.isHitted = true
                break;
            case ORANGE:                           
                comboDisplay.innerText = `Streak: ${this.combo}`
                scoreDisplay.innerText = `Score: ${this.score += 5 * this.multiplier[this.multiplierHit]}`
                multiplierDisplay.innerText = `Combo: x${this.multiplier[this.multiplierHit]}`

                //note.isHitted = true
                break;                
            }
    }

    
       
}