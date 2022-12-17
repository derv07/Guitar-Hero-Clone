class Player {
    constructor (ctx) {
        this.ctx = ctx

        this.green = 10
        this.red = 110
        this.yellow = 210
        this.blue = 310
        this.orange = 410

        this.score = 0
        this.noteHitted = 0
        this.combo = 0
        this.percentHitted = 0

        this.img = new Image()
        this.img.src = "/assets/notas.png"
        this.img.frames = 5
        this.img.frameIndex = 0
    }

    draw() {
        this.ctx.drawImage(this.img, this.img.frameIndex * this.img.width / this.img.frames, this.ctx.canvas.height - 40, this.img.width / this.img.frames, this.img.height, this.green, 0, 80, 30)
        
        /*this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.green, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.strokeStyle = 'black'
        this.ctx.strokeRect(this.green, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.red, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.strokeStyle = 'black'
        this.ctx.strokeRect(this.red, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(this.yellow, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.strokeStyle = 'black'
        this.ctx.strokeRect(this.yellow, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.blue, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.strokeStyle = 'black'
        this.ctx.strokeRect(this.blue, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.fillStyle = 'orange'
        this.ctx.fillRect(this.orange, this.ctx.canvas.height - 40, 80, 30)
        this.ctx.strokeStyle = 'black'
        this.ctx.strokeRect(this.orange, this.ctx.canvas.height - 40, 80, 30)*/
    }

    

    playerScore() {

    }

    playerCombo() {

    }



    hitNote(key) {
        game.notes.forEach((note) => {
            if (note.canHit()) {
                switch (key) {
                    case GREEN:
                    case RED:
                    case YELLOW:
                    case BLUE:
                    case ORANGE:
                        notesDisplay.innerText = `Notes hitted = ${++this.noteHitted}`
                        game.notes.shift()
                        break;        
                }
            }
        })   
    }
}