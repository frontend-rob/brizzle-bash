/**
 * represents a background object.
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {
        
    width = 1600;
    height = 480;

    /**
     * creates an instance of BackgroundObject.
     * @param {string} imagePath - the path to the background image.
     * @param {number} X - the x-coordinate of the object.
     */
    constructor(imagePath, X) {
        super().loadImage(imagePath);
        this.X = X;
        this.Y = 480 - this.height;
    }
}