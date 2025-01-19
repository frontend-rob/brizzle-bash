/**
 * represents an enemy object.
 * @extends MovableObject
 */
class Squid extends MovableObject {

    Y = 304;
    width = 136;
    height = 120;
    enemyLife = 10;
    collisionOffsetX = 15;
    collisionOffsetY = 0;


    /**
     * creates an instance of Squid.
     * @param {number} posX - the initial x position of the squid.
     * @param {number} varSpeedX - the speed of the squid along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(SQUID_IMAGES.WALK[0]);
        this.loadImages(SQUID_IMAGES.WALK);
        this.name = "Shadow Squid";
        this.X = posX;
        this.speedX = varSpeedX;
        this.oscillateY = 304;
        this.amplitude = 10;
        this.frequency = 0.25;
        this.time = 0;
        this.animate();
    }


    /**
     * animates the squid by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeftOscillate();
            this.playAnimation(SQUID_IMAGES.WALK);
        }, 1000 / 30);
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
