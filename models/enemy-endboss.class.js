/**
 * represents an object of the endboss.
 * @extends MovableObject
 */
class Endboss extends MovableObject {

    Y = 100;
    width = 400;
    height = 350;
    speedX = 0.125;
    enemyLife = 100;
    lastHitTime = 0;
    hitCooldown = 1000;
    isHit = false;

    IMAGES_WALK = [
        '../assets/img/monsters/mushroom/walk/mr-00.png',
        '../assets/img/monsters/mushroom/walk/mr-01.png',
        '../assets/img/monsters/mushroom/walk/mr-02.png',
        '../assets/img/monsters/mushroom/walk/mr-03.png',
        '../assets/img/monsters/mushroom/walk/mr-04.png',
        '../assets/img/monsters/mushroom/walk/mr-05.png',
        '../assets/img/monsters/mushroom/walk/mr-06.png',
        '../assets/img/monsters/mushroom/walk/mr-07.png',
        '../assets/img/monsters/mushroom/walk/mr-08.png',
        '../assets/img/monsters/mushroom/walk/mr-09.png',
        '../assets/img/monsters/mushroom/walk/mr-10.png',
        '../assets/img/monsters/mushroom/walk/mr-11.png',
        '../assets/img/monsters/mushroom/walk/mr-12.png',
        '../assets/img/monsters/mushroom/walk/mr-13.png',
        '../assets/img/monsters/mushroom/walk/mr-14.png',
        '../assets/img/monsters/mushroom/walk/mr-15.png',
        '../assets/img/monsters/mushroom/walk/mr-16.png',
        '../assets/img/monsters/mushroom/walk/mr-17.png',
        '../assets/img/monsters/mushroom/walk/mr-18.png',
        '../assets/img/monsters/mushroom/walk/mr-19.png',
        '../assets/img/monsters/mushroom/walk/mr-20.png',
        '../assets/img/monsters/mushroom/walk/mr-21.png',
        '../assets/img/monsters/mushroom/walk/mr-22.png',
        '../assets/img/monsters/mushroom/walk/mr-23.png',
        '../assets/img/monsters/mushroom/walk/mr-24.png',
        '../assets/img/monsters/mushroom/walk/mr-25.png',
        '../assets/img/monsters/mushroom/walk/mr-26.png',
        '../assets/img/monsters/mushroom/walk/mr-27.png',
        '../assets/img/monsters/mushroom/walk/mr-28.png',
        '../assets/img/monsters/mushroom/walk/mr-29.png'
    ];

    IMAGES_HIT = [
        '../assets/img/monsters/mushroom/hit/mrh-00.png',
        '../assets/img/monsters/mushroom/hit/mrh-01.png',
        '../assets/img/monsters/mushroom/hit/mrh-02.png',
        '../assets/img/monsters/mushroom/hit/mrh-03.png',
        '../assets/img/monsters/mushroom/hit/mrh-04.png',
        '../assets/img/monsters/mushroom/hit/mrh-05.png',
        '../assets/img/monsters/mushroom/hit/mrh-06.png'
    ];


    /**
     * creates an instance of Endboss.
     * @param {number} posX - the initial x position of the endboss.
     */
    constructor(posX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_HIT);
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
                this.playAnimation(this.IMAGES_HIT);
            } else {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 1000 / 60);
    };


    /**
     * reduces the enemy's life by the specified amount of damage and plays a hit animation.
     * @param {number} damage - the amount of damage inflicted.
     */
    getHit(damage) {
        const currentTime = new Date().getTime();
        if (currentTime - this.lastHitTime < this.hitCooldown) {
            return;
        }

        this.enemyLife -= damage;
        soundManager.playSound('hurtEndboss');
        if (this.enemyLife < 0) {
            this.enemyLife = 0;
        }
        console.log(`Enemy ${this.name} was hit! Current Life: ${this.enemyLife}`);

        this.isHit = true;
        setTimeout(() => this.isHit = false, 2500);

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
        soundManager.playSound('hurtEndboss');
        soundManager.playSound('deadEndboss');
        // soundManager.playSound('gameover');
        const index = this.world.level.enemies.indexOf(this);
        if (index > -1) {
            this.world.level.enemies.splice(index, 1);
        }

        showGameOverScreen("The Endboss has been defeated, and peace returns to Moustacheshire... for now.");

        console.log(`Enemies alive:`, this.world.level.enemies);
    }


}