class Character {
    constructor(imageSrc, startX, startY) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.x = startX;
        this.y = startY;
        this.width = 50;
        this.height = 50;
        this.speed = 2;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        if (this.x < 100) {
            // this.x += this.speed;
            this.y += this.speed;
        }
    }

    enter(){
        
    }
}
