class Background {
    constructor(imageSrc, gameWidth, gameHeight) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.width = gameWidth;
        this.height = gameHeight;
        this.x = 0;
        this.y = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
