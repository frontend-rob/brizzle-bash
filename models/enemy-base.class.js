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
     * calculates the distance between the squid and the character.
     * @returns {number} the distance between the squid and the character.
     */
    calculateDistanceToCharacter() {
        if (this.world && this.world.character) {
            const characterX = this.world.character.X;
            return Math.abs(this.X - characterX);
        }
        return null;
    }


    /**
     * checks if the squid should animate based on the distance to the character.
     * @returns {boolean} true if the squid should animate, otherwise false.
     */
    shouldAnimate() {
        const distance = this.calculateDistanceToCharacter();
        return distance !== null && distance <= 768;
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

        if (this.enemyLife <= 0) {
            this.isDead();
        }
    }


    /**
     * handles the logic when the enemy's life reaches zero.
     */
    isDead() {
        soundManager.playSound('deadEnemy');
        const index = this.world.level.enemies.indexOf(this);
        if (index > -1) {
            this.world.level.enemies.splice(index, 1);
        }
    }
}