/**
 * represents an object of the endboss.
 * @extends Enemy
 */
class Endboss extends Enemy {

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
    }


    /**
     * animates the endboss by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            if (this.shouldAnimate()) {
                if (!this.isHit) {
                    this.moveLeft();
                    this.playAnimation(ENDBOSS_IMAGES.WALK);
                } else {
                    this.playAnimation(ENDBOSS_IMAGES.HIT);
                }
            }
        }, 1000 / 60);
    }


    /**
     * reduces the enemy's life by the specified amount of damage, increases its speed, and plays a hit animation.
     * @param {number} damage - the amount of damage inflicted.
     */
    getHit(damage) {
        const currentTime = new Date().getTime();

        if (currentTime - this.lastHitTime < this.hitCooldown) {
            return;
        }

        this.reduceLife(damage);
        this.increaseSpeed();
        this.playHitAnimation();


        if (this.enemyLife <= 0) {
            this.isDead();
        }

        this.lastHitTime = currentTime;
    }


    /**
     * reduces the life of the endboss.
     * @param {number} damage - the amount of damage to subtract from the endboss's life.
     */
    reduceLife(damage) {
        this.enemyLife -= damage;
        if (this.enemyLife < 0) {
            this.enemyLife = 0;
        }
    }


    /**
     * increases the speed of the endboss after being hit.
     */
    increaseSpeed() {
        this.speedX += 0.5;
    }


    /**
     * plays the hit animation and resets it after a short duration.
     */
    playHitAnimation() {
        this.isHit = true;
        setTimeout(() => this.isHit = false, 2500);
        soundManager.playSound('hurtEndboss');
    }


    /**
     * handles the logic when the enemy's life reaches zero.
     */
    isDead() {
        soundManager.playSound('deadEndboss');
        const index = this.world.level.enemies.indexOf(this);
        if (index > -1) {
            this.world.level.enemies.splice(index, 1);
        }

        showGameOverScreen("The Endboss has been defeated, and peace returns to Moustacheshire... for now.");
    }
}