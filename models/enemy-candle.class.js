/**
 * represents an enemy object.
 * @extends MovableObject
 */
class Candle extends MovableObject {

    Y = 296;
    width = 171;
    height = 150;
    enemyLife = 10;
    collisionOffsetX = 20;
    collisionOffsetY = 20;

    /**
     * creates an instance of Candle.
     * @param {number} posX - the initial x position of the candle.
     * @param {number} varSpeedX - the speed of the candle along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(CANDLE_IMAGES.WALK[0]);
        this.loadImages(CANDLE_IMAGES.WALK);
        this.name = "Candle Bug";
        this.X = posX;
        this.speedX = varSpeedX;
        this.animate();
    }


    /**
     * animates the candle by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(CANDLE_IMAGES.WALK);
        }, 1000 / 60);
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