class Background {
    constructor(ctx) {
        this.ctx = ctx    

        this.img = new Image()
        this.img.src = "/assets/a1669f_1e9f6a27d633476f9bccea05ff1b906b_mv2.png"
        this.h = this.ctx.canvas.height
        this.w = this.ctx.canvas.width

        this.tick = 0
        this.fy = 0
    }

    draw() {
        this.ctx.drawImage(this.img, 0, 0, this.w, this.h)
        this.ctx.fillStyle = 'slategray'
        this.ctx.fillRect(47, 0, 5, this.h - 10)
        this.ctx.fillStyle = 'slategray'
        this.ctx.fillRect(147, 0, 5, this.h - 10)
        this.ctx.fillStyle = 'slategray'
        this.ctx.fillRect(247, 0, 5, this.h - 10)
        this.ctx.fillStyle = 'slategray'
        this.ctx.fillRect(347, 0, 5, this.h - 10)
        this.ctx.fillStyle = 'slategray'
        this.ctx.fillRect(447, 0, 5, this.h - 10)
        
    }
}