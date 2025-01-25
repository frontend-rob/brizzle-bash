/**
 * represents a throwable object.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {

    /**
     * creates an instance of ThrowableObject.
     * @param {number} X - the x-coordinate of the object.
     * @param {number} Y - the y-coordinate of the object.
     * @param {Object} world - the game world.
     * @param {Object} character - the character throwing the object.
     */
    constructor(X, Y, world, character) {
        super().loadImage('./assets/img/ornaments/spiky-ball.png');
        this.X = X;
        this.Y = Y;
        this.width = 56;
        this.height = 56;
        this.world = world;
        this.character = character;
        this.throwBall();
    }


    /**
     * throws the ball by applying speed and gravity.
     */
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


    /**
     * checks for collisions with enemies and applies damage.
     */
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
            }
        });
    }


    /**
     * checks if the throwable object is colliding with an enemy, with an optional offset.
     * @param {Object} enemy - the enemy object.
     * @param {number} x - the x-coordinate of the throwable object.
     * @param {number} y - the y-coordinate of the throwable object.
     * @param {number} width - the width of the throwable object.
     * @param {number} height - the height of the throwable object.
     * @param {number} offsetX - optional horizontal offset for collision check.
     * @param {number} offsetY - optional vertical offset for collision check.
     * @returns {boolean} true if the objects are colliding, false otherwise.
     */
    isColliding(enemy, x, y, width, height, offsetX = -48, offsetY = -48) {
        return (
            x + offsetX < enemy.X + enemy.width &&
            x + width + offsetX > enemy.X &&
            y + offsetY < enemy.Y + enemy.height &&
            y + height + offsetY > enemy.Y
        );
    }

}