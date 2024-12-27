class Squid extends MovableObject {

    Y = 304;
    width = 136;
    height = 120;
    enemyLife = 20;


    IMAGES_WALK = [
        '../assets/img/monsters/squid/squ-00.png',
        '../assets/img/monsters/squid/squ-01.png',
        '../assets/img/monsters/squid/squ-02.png',
        '../assets/img/monsters/squid/squ-03.png',
        '../assets/img/monsters/squid/squ-04.png',
        '../assets/img/monsters/squid/squ-05.png',
        '../assets/img/monsters/squid/squ-06.png',
        '../assets/img/monsters/squid/squ-07.png',
        '../assets/img/monsters/squid/squ-08.png',
        '../assets/img/monsters/squid/squ-09.png',
        '../assets/img/monsters/squid/squ-10.png',
        '../assets/img/monsters/squid/squ-11.png',
        '../assets/img/monsters/squid/squ-12.png',
        '../assets/img/monsters/squid/squ-13.png',
        '../assets/img/monsters/squid/squ-14.png',
        '../assets/img/monsters/squid/squ-15.png',
        '../assets/img/monsters/squid/squ-16.png',
        '../assets/img/monsters/squid/squ-17.png',
        '../assets/img/monsters/squid/squ-18.png',
        '../assets/img/monsters/squid/squ-19.png'
    ];


    /**
     * creates an instance of Squid.
     * @param {number} posX - the initial x position of the squid.
     * @param {number} varSpeedX - the speed of the squid along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.name = "Shadow Squid";
        this.X = posX;
        this.speedX = varSpeedX;
        this.oscillateY = 304;
        this.amplitude = 10;
        this.frequency = 0.1;
        this.time = 0;
        this.animate();
    }


    /**
     * animates the squid by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeftOscillate();
            this.playAnimation(this.IMAGES_WALK);
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
