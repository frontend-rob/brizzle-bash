/**
 * represents a bomb object that can be collected.
 * @extends MovableObject
 */
class BombObject extends MovableObject {

    width = 40;
    height = 40;

    /**
     * creates an instance of BombObject.
     * @param {number} posX - the x-coordinate of the object.
     * @param {number} posY - the y-coordinate of the object.
     */
    constructor(posX, posY) {
        super().loadImage('./assets/img/ornaments/collectable-bomb.png');
        this.X = posX;
        this.Y = posY;
    }
}
