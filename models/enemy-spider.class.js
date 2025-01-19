/**
 * represents an enemy object.
 * @extends MovableObject
 */
class Spider extends MovableObject {
    
    Y = 320;
    width = 142;
    height = 125;
    enemyLife = 10;
    collisionOffsetX = 10;
    collisionOffsetY = 10;


    /**
     * creates an instance of Spider.
     * @param {number} posX - the initial x position of the spider.
     * @param {number} varSpeedX - the speed of the spider along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(SPIDER_IMAGES.WALK[0]);
        this.loadImages(SPIDER_IMAGES.WALK);
        this.name = "Toxic Widow";
        this.X = posX;
        this.speedX = varSpeedX;
        this.animate();
    };


    /**
     * animates the spider by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
            this.playAnimation(SPIDER_IMAGES.WALK);
        }, 1000 / 60);
    };


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