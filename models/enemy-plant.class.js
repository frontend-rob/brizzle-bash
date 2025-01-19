/**
 * represents an enemy object.
 * @extends MovableObject
 */
class Plant extends MovableObject {

    Y = 304;
    width = 171;
    height = 150;
    enemyLife = 10;
    collisionOffsetX = 20;
    collisionOffsetY = 20;
    


    /**
     * creates an instance of Plant.
     * @param {number} posX - the initial x position of the plant.
     */
    constructor(posX) {
        super().loadImage(PLANT_IMAGES.IDLE[0]);
        this.loadImages(PLANT_IMAGES.IDLE);
        this.X = posX;
        this.name = "Flesh Lotus";
        this.animate();
    };


    /**
     * animates the plant by playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(PLANT_IMAGES.IDLE);
        }, 1000 / 35);
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