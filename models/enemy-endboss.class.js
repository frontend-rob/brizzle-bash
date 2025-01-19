/**
 * represents an object of the endboss.
 * @extends MovableObject
 */
class Endboss extends MovableObject {

    Y = 100;
    width = 400;
    height = 350;
    speedX = 0.25;
    enemyLife = 100;
    lastHitTime = 0;
    hitCooldown = 1000;
    isHit = false;
    collisionOffsetX = 30;
    collisionOffsetY = 25;


    /**
     * creates an instance of Endboss.
     * @param {number} posX - the initial x position of the endboss.
     */
    constructor(posX) {
        super().loadImage(ENDBOSS_IMAGES.WALK[0]);
        this.loadImages(ENDBOSS_IMAGES.WALK);
        this.loadImages(ENDBOSS_IMAGES.HIT);
        this.name = "Fungal Colossus";
        this.X = posX;
        this.animate();
    };


    /**
     * animates the endboss by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
            if (this.isHit) {
                this.playAnimation(ENDBOSS_IMAGES.HIT);
            } else {
                this.playAnimation(ENDBOSS_IMAGES.WALK);
            }
        }, 1000 / 60);
    };


/**
 * reduces the enemy's life by the specified amount of damage, increases its speed, and plays a hit animation.
 * @param {number} damage - the amount of damage inflicted.
 */
    getHit(damage) {
        const currentTime = new Date().getTime();
        if (currentTime - this.lastHitTime < this.hitCooldown) {
            return;
        }

        // Reduces life
        this.enemyLife -= damage;
        soundManager.playSound('hurtEndboss');
        if (this.enemyLife < 0) {
            this.enemyLife = 0;
        }
        console.log(`Enemy ${this.name} was hit! Current Life: ${this.enemyLife}`);

        // Increases speed after being hit
        this.speedX += 0.25;
        console.log(`Endboss speed increased to: ${this.speedX}`);

        // Play hit animation
        this.isHit = true;
        setTimeout(() => this.isHit = false, 2500);

        // Check if enemy is dead
        if (this.enemyLife <= 0) {
            this.isDead();
        }

        this.lastHitTime = currentTime;
    }



/**
 * handles the logic when the enemy's life reaches zero.
 */
    isDead() {
        console.log(`Enemy ${this.name} has died!`);
        soundManager.playSound('deadEndboss');
        const index = this.world.level.enemies.indexOf(this);
        if (index > -1) {
            this.world.level.enemies.splice(index, 1);
        }

        showGameOverScreen("The Endboss has been defeated, and peace returns to Moustacheshire... for now.");

        console.log(`Enemies alive:`, this.world.level.enemies);
    }


}