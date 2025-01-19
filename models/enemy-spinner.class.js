/**
 * represents an enemy object.
 * @extends MovableObject
 */
class Spinner extends MovableObject {

    width = 114;
    height = 100;
    amplitude = 4;
    frequency = 0.005;
    direction = 1;
    rangeX = 300;
    startX;
    enemyLife = 10;
    collisionOffsetX = 5;
    collisionOffsetY = 5;


    /**
     * creates an instance of Spinner.
     * @param {number} posX - the initial x position of the spinner.
     * @param {number} posY - the initial y position of the spinner.
     * @param {number} varSpeedX - the speed of the spinner along the x-axis.
     */
    constructor(posX, posY, varSpeedX) {
        super().loadImage(SPINNER_IMAGES.WALK[0]);
        this.loadImages(SPINNER_IMAGES.WALK);
        this.name = "Ocular Spinner";
        this.X = posX;
        this.Y = posY;
        this.speedX = varSpeedX;
        this.startX = posX;
        this.animate();
    };


    /**
     * animates the spinner by moving it in a sinusoidal pattern and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveSinus();
            this.playAnimation(SPINNER_IMAGES.WALK);
        }, 1000 / 60);

    }


    /**
     * moves the spinner in a sinusoidal pattern.
     */
    moveSinus() {
        if (!this.world || !this.world.isPaused) {
            this.Y += Math.sin(this.frequency * Date.now()) * this.amplitude;
            this.X += this.speedX * this.direction;

            if (this.X > this.startX + this.rangeX || this.X < this.startX) {
                this.direction *= -1;
            }
        }
    }


    /**
     * reduces the enemy's life by the given damage amount.
     * @param {number} damage - the amount of damage to inflict.
     */
    getHit(damage) {
        this.enemyLife -= damage;
        if (this.enemyLife < 0) {
            this.enemyLife = 0;
        }
        console.log(`Enemy ${this.name} was hit! Current Life: ${this.enemyLife}`);
        if (this.enemyLife <= 0) {
            this.isDead();
        }
    }


    /**
     * handles the logic when the enemy's life reaches zero.
     */
    isDead() {
        console.log(`Enemy ${this.name} has died!`);
        soundManager.playSound('deadEnemy');
        const index = this.world.level.enemies.indexOf(this);
        if (index > -1) {
            this.world.level.enemies.splice(index, 1);
        }
        console.log(`Enemies alive:`, this.world.level.enemies);
    }

}