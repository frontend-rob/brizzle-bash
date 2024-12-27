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
            this.checkThrowCollision();
        }, 1000 / 60);
    }

    checkThrowCollision() {
        const throwRange = {
            x: this.X,
            y: this.Y,
            width: this.width,
            height: this.height
        };

        this.world.level.enemies.forEach((enemy) => {
            if (this.isColliding(enemy, throwRange.x, throwRange.y, throwRange.width, throwRange.height)) {
                enemy.getHit(20);
                console.log(`Enemy ${enemy.name} was hit by a throw! Current Life: ${enemy.enemyLife}`);
            }
        });
    }

    isColliding(enemy, x, y, width, height) {
        return (
            x < enemy.X + enemy.width &&
            x + width > enemy.X &&
            y < enemy.Y + enemy.height &&
            y + height > enemy.Y
        );
    }
}
