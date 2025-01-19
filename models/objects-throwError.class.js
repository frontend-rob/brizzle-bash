/**
 * represents an error image object that can be moved.
 * @extends MovableObject
 */
class ErrorImageObject extends MovableObject {

    /**
     * creates an instance of ErrorImageObject.
     * @param {number} X - the x-coordinate of the object.
     * @param {number} Y - the y-coordinate of the object.
     */
    constructor(X, Y) {
        super().loadImage('../assets/img/ornaments/throw-error.png');
        this.X = X;
        this.Y = Y;
        this.width = 64;
        this.height = 64;
        this.setPosition(X, Y);
    }


    /**
     * sets the position of the object.
     * @param {number} X - the x-coordinate to set.
     * @param {number} Y - the y-coordinate to set.
     */
    setPosition(X, Y) {
        this.X = X + 88;
        this.Y = Y - 24;
    }
}
