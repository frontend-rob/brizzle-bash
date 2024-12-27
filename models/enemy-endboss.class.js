class Endboss extends MovableObject {

    Y = 100;
    width = 400;
    height = 350;
    speedX = 0.125;
    enemyLife = 100;
    lastHitTime = 0;
    hitCooldown = 1000;

    IMAGES_WALK = [
        '../assets/img/monsters/mushroom/mr-00.png',
        '../assets/img/monsters/mushroom/mr-01.png',
        '../assets/img/monsters/mushroom/mr-02.png',
        '../assets/img/monsters/mushroom/mr-03.png',
        '../assets/img/monsters/mushroom/mr-04.png',
        '../assets/img/monsters/mushroom/mr-05.png',
        '../assets/img/monsters/mushroom/mr-06.png',
        '../assets/img/monsters/mushroom/mr-07.png',
        '../assets/img/monsters/mushroom/mr-08.png',
        '../assets/img/monsters/mushroom/mr-09.png',
        '../assets/img/monsters/mushroom/mr-10.png',
        '../assets/img/monsters/mushroom/mr-11.png',
        '../assets/img/monsters/mushroom/mr-12.png',
        '../assets/img/monsters/mushroom/mr-13.png',
        '../assets/img/monsters/mushroom/mr-14.png',
        '../assets/img/monsters/mushroom/mr-15.png',
        '../assets/img/monsters/mushroom/mr-16.png',
        '../assets/img/monsters/mushroom/mr-17.png',
        '../assets/img/monsters/mushroom/mr-18.png',
        '../assets/img/monsters/mushroom/mr-19.png',
        '../assets/img/monsters/mushroom/mr-20.png',
        '../assets/img/monsters/mushroom/mr-21.png',
        '../assets/img/monsters/mushroom/mr-22.png',
        '../assets/img/monsters/mushroom/mr-23.png',
        '../assets/img/monsters/mushroom/mr-24.png',
        '../assets/img/monsters/mushroom/mr-25.png',
        '../assets/img/monsters/mushroom/mr-26.png',
        '../assets/img/monsters/mushroom/mr-27.png',
        '../assets/img/monsters/mushroom/mr-28.png',
        '../assets/img/monsters/mushroom/mr-29.png'
    ];


    /**
     * creates an instance of Endboss.
     * @param {number} posX - the initial x position of the endboss.
     */
    constructor(posX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
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
            this.playAnimation(this.IMAGES_WALK);
        }, 1000 / 60);
    };


    /**
     * reduces the enemy's life by the given damage amount.
     * @param {number} damage - the amount of damage to inflict.
     */
    getHit(damage) {
        const currentTime = new Date().getTime();
        if (currentTime - this.lastHitTime < this.hitCooldown) {
            return;
        }

        this.enemyLife -= damage;
        if (this.enemyLife < 0) {
            this.enemyLife = 0;
        }
        console.log(`Enemy ${this.name} was hit! Current Life: ${this.enemyLife}`);
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
        const index = this.world.level.enemies.indexOf(this);
        if (index > -1) {
            this.world.level.enemies.splice(index, 1);
        }
        console.log(`Enemies alive:`, this.world.level.enemies);
    }

}