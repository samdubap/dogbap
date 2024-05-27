class Character {
    constructor(imageSrc, startX, startY) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.x = startX;
        this.y = startY;
        this.width = 300;
        this.height = 300;
        this.speed = 2;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        if (this.y < 120) {
            this.y += this.speed;
        }
        
    }

    enter(){
        
    }
}
