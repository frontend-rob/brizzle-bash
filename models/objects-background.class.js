/**
 * represents a background object.
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {
        
    width = 1600;
    height = 480;

    /**
     * creates an instance of BackgroundObject.
     * @param {string} imgaePath - the path to the background image.
     * @param {number} X - the x-coordinate of the object.
     */
    constructor(imgaePath, X) {
        super().loadImage(imgaePath);
        this.X = X;
        this.Y = 480 - this.height;
    };

}