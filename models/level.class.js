/**
 * class representing a level in the game.
 */
class Level {
    enemies;
    backgroundObjects;
    healthObjects;
    bombObjects;
    levelEndX = 7200;

    /**
     * create a level.
     * @param {Array} enemies - the enemies in the level.
     * @param {Array} backgroundObjects - the background objects in the level.
     * @param {Array} healthObjects - the health objects in the level.
     * @param {Array} bombObjects - the bomb objects in the level.
     */
    constructor(enemies, backgroundObjects, healthObjects, bombObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.healthObjects = healthObjects;
        this.bombObjects = bombObjects;
    }

}