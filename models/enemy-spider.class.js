/**
 * represents an enemy object.
 * @extends MovableObject
 */
class Spider extends MovableObject {
    
    Y = 320;
    width = 142;
    height = 125;
    enemyLife = 20;

    IMAGES_WALK = [
        '../assets/img/monsters/spider/sp-00.png',
        '../assets/img/monsters/spider/sp-01.png',
        '../assets/img/monsters/spider/sp-02.png',
        '../assets/img/monsters/spider/sp-03.png',
        '../assets/img/monsters/spider/sp-04.png',
        '../assets/img/monsters/spider/sp-05.png',
        '../assets/img/monsters/spider/sp-06.png',
        '../assets/img/monsters/spider/sp-07.png',
        '../assets/img/monsters/spider/sp-08.png',
        '../assets/img/monsters/spider/sp-09.png',
        '../assets/img/monsters/spider/sp-10.png',
        '../assets/img/monsters/spider/sp-11.png',
        '../assets/img/monsters/spider/sp-12.png',
        '../assets/img/monsters/spider/sp-13.png',
        '../assets/img/monsters/spider/sp-14.png',
        '../assets/img/monsters/spider/sp-15.png',
        '../assets/img/monsters/spider/sp-16.png',
        '../assets/img/monsters/spider/sp-17.png',
        '../assets/img/monsters/spider/sp-18.png',
        '../assets/img/monsters/spider/sp-19.png'
    ];


    /**
     * creates an instance of Spider.
     * @param {number} posX - the initial x position of the spider.
     * @param {number} varSpeedX - the speed of the spider along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
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
            this.playAnimation(this.IMAGES_WALK);
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