/**
 * represents an enemy object.
 * @extends MovableObject
 */
class Spirit extends MovableObject {
    
    width = 171;
    height = 150;
    enemyLife = 10;

    IMAGES_WALK = [
        '../assets/img/monsters/spirit/spr-00.png',
        '../assets/img/monsters/spirit/spr-01.png',
        '../assets/img/monsters/spirit/spr-02.png',
        '../assets/img/monsters/spirit/spr-03.png',
        '../assets/img/monsters/spirit/spr-04.png',
        '../assets/img/monsters/spirit/spr-05.png',
        '../assets/img/monsters/spirit/spr-06.png',
        '../assets/img/monsters/spirit/spr-07.png',
        '../assets/img/monsters/spirit/spr-08.png',
        '../assets/img/monsters/spirit/spr-09.png',
        '../assets/img/monsters/spirit/spr-10.png',
        '../assets/img/monsters/spirit/spr-11.png',
        '../assets/img/monsters/spirit/spr-12.png',
        '../assets/img/monsters/spirit/spr-13.png',
        '../assets/img/monsters/spirit/spr-14.png',
        '../assets/img/monsters/spirit/spr-15.png',
        '../assets/img/monsters/spirit/spr-16.png',
        '../assets/img/monsters/spirit/spr-17.png',
        '../assets/img/monsters/spirit/spr-18.png',
        '../assets/img/monsters/spirit/spr-19.png'
    ];


    /**
     * creates an instance of Spirit.
     * @param {number} posX - the initial x position of the spirit.
     * @param {number} posY - the initial y position of the spirit.
     * @param {number} varSpeedX - the speed of the spirit along the x-axis.
     */
    constructor(posX, posY, varSpeedX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.name = "Soul Phantom";
        this.X = posX;
        this.speedX = varSpeedX;
        this.oscillateY = posY;
        this.amplitude = 10;
        this.frequency = 0.075;
        this.time = 0;
        this.animate();
    };


    /**
     * animates the spirit by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeftOscillate();
            this.playAnimation(this.IMAGES_WALK);
        }, 1000 / 45);
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