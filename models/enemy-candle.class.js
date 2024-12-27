class Candle extends MovableObject {

    Y = 296;
    width = 171;
    height = 150;
    enemyLife = 10;

    IMAGES_WALK = [
        '../assets/img/monsters/candle/cm-00.png',
        '../assets/img/monsters/candle/cm-01.png',
        '../assets/img/monsters/candle/cm-02.png',
        '../assets/img/monsters/candle/cm-03.png',
        '../assets/img/monsters/candle/cm-04.png',
        '../assets/img/monsters/candle/cm-05.png',
        '../assets/img/monsters/candle/cm-06.png',
        '../assets/img/monsters/candle/cm-07.png',
        '../assets/img/monsters/candle/cm-08.png',
        '../assets/img/monsters/candle/cm-09.png',
        '../assets/img/monsters/candle/cm-10.png',
        '../assets/img/monsters/candle/cm-11.png',
        '../assets/img/monsters/candle/cm-12.png',
        '../assets/img/monsters/candle/cm-13.png',
        '../assets/img/monsters/candle/cm-14.png',
        '../assets/img/monsters/candle/cm-15.png',
        '../assets/img/monsters/candle/cm-16.png',
        '../assets/img/monsters/candle/cm-17.png',
        '../assets/img/monsters/candle/cm-18.png',
        '../assets/img/monsters/candle/cm-19.png',
        '../assets/img/monsters/candle/cm-20.png',
        '../assets/img/monsters/candle/cm-21.png',
        '../assets/img/monsters/candle/cm-22.png',
        '../assets/img/monsters/candle/cm-23.png',
        '../assets/img/monsters/candle/cm-24.png',
        '../assets/img/monsters/candle/cm-25.png',
        '../assets/img/monsters/candle/cm-26.png',
        '../assets/img/monsters/candle/cm-27.png',
        '../assets/img/monsters/candle/cm-28.png',
        '../assets/img/monsters/candle/cm-29.png',
        '../assets/img/monsters/candle/cm-30.png',
        '../assets/img/monsters/candle/cm-31.png',
        '../assets/img/monsters/candle/cm-32.png',
        '../assets/img/monsters/candle/cm-33.png',
        '../assets/img/monsters/candle/cm-34.png',
        '../assets/img/monsters/candle/cm-35.png',
        '../assets/img/monsters/candle/cm-36.png',
        '../assets/img/monsters/candle/cm-37.png',
        '../assets/img/monsters/candle/cm-38.png',
        '../assets/img/monsters/candle/cm-39.png'
    ];


    /**
     * creates an instance of Candle.
     * @param {number} posX - the initial x position of the candle.
     * @param {number} varSpeedX - the speed of the candle along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
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
            this.playAnimation(this.IMAGES_WALK);
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
