class Background {
    constructor(ctx) {
        this.ctx = ctx    

        this.img = new Image()
        this.img.src = "/assets/a1669f_1e9f6a27d633476f9bccea05ff1b906b_mv2.png"
        this.h = this.ctx.canvas.height
        this.w = this.ctx.canvas.width
    }

    draw() {
        this.ctx.drawImage(this.img, 0, 0, this.w, this.h)
    }
}