class Spinner extends MovableObject {

    width = 114;
    height = 100;
    amplitude = 4;
    frequency = 0.005;
    direction = 1;
    rangeX = 300;
    startX;
    enemyLife = 10;


    IMAGES_WALK = [
        '../assets/img/monsters/spinner/spi-00.png',
        '../assets/img/monsters/spinner/spi-01.png',
        '../assets/img/monsters/spinner/spi-02.png',
        '../assets/img/monsters/spinner/spi-03.png',
        '../assets/img/monsters/spinner/spi-04.png',
        '../assets/img/monsters/spinner/spi-05.png',
        '../assets/img/monsters/spinner/spi-06.png',
        '../assets/img/monsters/spinner/spi-07.png',
        '../assets/img/monsters/spinner/spi-08.png',
        '../assets/img/monsters/spinner/spi-09.png',
        '../assets/img/monsters/spinner/spi-10.png',
        '../assets/img/monsters/spinner/spi-11.png',
        '../assets/img/monsters/spinner/spi-12.png',
        '../assets/img/monsters/spinner/spi-13.png',
        '../assets/img/monsters/spinner/spi-14.png',
        '../assets/img/monsters/spinner/spi-15.png',
        '../assets/img/monsters/spinner/spi-16.png',
        '../assets/img/monsters/spinner/spi-17.png',
        '../assets/img/monsters/spinner/spi-18.png',
        '../assets/img/monsters/spinner/spi-19.png'
    ];


    /**
     * creates an instance of Spinner.
     * @param {number} posX - the initial x position of the spinner.
     * @param {number} posY - the initial y position of the spinner.
     * @param {number} varSpeedX - the speed of the spinner along the x-axis.
     */
    constructor(posX, posY, varSpeedX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
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
            this.playAnimation(this.IMAGES_WALK);
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