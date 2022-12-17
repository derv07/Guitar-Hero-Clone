class Player {
    constructor (ctx) {
        this.ctx = ctx

        this.green = new Note (ctx, 10, FRETY, 'green', 40)
        this.red = new Note (ctx, 110, FRETY, 'red', 40)
        this.yellow = new Note (ctx, 210, FRETY, 'yellow', 40)
        this.blue = new Note (ctx, 310, FRETY, 'blue', 40)
        this.orange = new Note (ctx, 410, FRETY, 'orange', 40)

        this.score = 0
        this.noteHitted = 0
        this.combo = 0
        this.percentHitted = 0

        //GREEN NOTE FRET
        this.greenFret = new Image()
        this.greenFret.src = "/assets/greenfret.png"
        this.greenFret.frames = 3
        this.greenFret.frameIndex = 0

        //RED NOTE FRET
        this.redFret = new Image()
        this.redFret.src = "/assets/redfret.png"
        this.redFret.frames = 3
        this.redFret.frameIndex = 0

        //YELLOW NOTE FRET
        this.yellowFret = new Image()
        this.yellowFret.src = "/assets/yellowfret.png"
        this.yellowFret.frames = 3
        this.yellowFret.frameIndex = 0

        //BLUE NOTE FRET
        this.blueFret = new Image()
        this.blueFret.src = "/assets/bluefret.png"
        this.blueFret.frames = 3
        this.blueFret.frameIndex = 0

        // ORANGE NOTE FRET
        this.orangeFret = new Image()
        this.orangeFret.src = "/assets/orangefret.png"
        this.orangeFret.frames = 3
        this.orangeFret.frameIndex = 0
    }

    draw() {
        this.ctx.strokeStyle = 'red'
        this.ctx.strokeRect(this.green.x, FRETY, 80, 40)
        this.ctx.drawImage(this.greenFret, 0, this.greenFret.frameIndex * this.greenFret.height / this.greenFret.frames, this.greenFret.width, this.greenFret.height / this.greenFret.frames, this.green.x, FRETY, 80, 40)
        
        this.ctx.strokeStyle = 'red'
        this.ctx.strokeRect(this.red.x, FRETY, 80, 40)
        this.ctx.drawImage(this.redFret, 0, this.redFret.frameIndex * this.redFret.height / this.redFret.frames, this.redFret.width, this.redFret.height / this.redFret.frames, this.red.x, FRETY, 80, 40)

        this.ctx.strokeStyle = 'red'
        this.ctx.strokeRect(this.yellow.x, FRETY, 80, 40)
        this.ctx.drawImage(this.yellowFret, 0, this.yellowFret.frameIndex * this.yellowFret.height / this.yellowFret.frames, this.yellowFret.width, this.yellowFret.height / this.yellowFret.frames, this.yellow.x, FRETY, 80, 40)

        this.ctx.strokeStyle = 'red'
        this.ctx.strokeRect(this.blue.x, FRETY, 80, 40)
        this.ctx.drawImage(this.blueFret, 0, this.blueFret.frameIndex * this.blueFret.height / this.blueFret.frames, this.blueFret.width, this.blueFret.height / this.blueFret.frames, this.blue.x, FRETY, 80, 40)

        this.ctx.strokeStyle = 'red'
        this.ctx.strokeRect(this.orange.x, FRETY, 80, 40)
        this.ctx.drawImage(this.orangeFret, 0, this.orangeFret.frameIndex * this.orangeFret.height / this.orangeFret.frames, this.orangeFret.width, this.orangeFret.height / this.orangeFret.frames, this.orange.x, FRETY, 80, 40)

    }

    

    playerScore() {

    }

    playerCombo() {

    }

    hitNote(key) {
        switch (key) {
            case GREEN:  
                notesDisplay.innerText = `Notes hitted = ${++this.noteHitted}`
                //note.isHitted = true
                break;                        
            case RED:
                notesDisplay.innerText = `Notes hitted = ${++this.noteHitted}`
                //note.isHitted = true
                break;
            case YELLOW:                            
                notesDisplay.innerText = `Notes hitted = ${++this.noteHitted}`
                //note.isHitted = true
                break;
            case BLUE:                            
                notesDisplay.innerText = `Notes hitted = ${++this.noteHitted}`
                //note.isHitted = true
                break;
            case ORANGE:                            
                notesDisplay.innerText = `Notes hitted = ${++this.noteHitted}`
                //note.isHitted = true
                break;                
                }
}
       
}