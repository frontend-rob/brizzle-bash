/**
 * represents an enemy object.
 * @extends MovableObject
 */
class Enemy extends MovableObject {
    constructor(posX) {
        super();
        this.X = posX;
        this.enemyLife = 10;
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