class Level {
    enemies;
    backgroundObjects;
    healthObjects;
    bombObjects;
    levelEndX = 7600;

    constructor(enemies, backgroundObjects, healthObjects, bombObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.healthObjects = healthObjects;
        this.bombObjects = bombObjects;
    }
}