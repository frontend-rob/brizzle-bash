class ThrowableObject extends MovableObject {
    constructor(X, Y, world, character) {
        super().loadImage('../assets/img/ornaments/spiky-ball.png');
        this.X = X;
        this.Y = Y;
        this.width = 56;
        this.height = 56;
        this.world = world;
        this.character = character;
        this.throwBall();
    }


    throwBall() {
        this.speedY = 25;
        this.speedX = 12.5 * this.character.direction;
        this.applyGravity();

        setInterval(() => {
            if (this.world.isPaused) return;
            this.X += this.speedX;
        }, 1000 / 60);
    }
    
}
