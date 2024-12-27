/**
 * represents a drawable object.
 */
class DrawableObject {

    img;
    currentImage = 0;
    imageCache = {};

    /**
     * loads an image from the specified path.
     * @param {string} path - the path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * loads multiple images from the specified paths.
     * @param {string[]} arr - an array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * draws the end boss on the canvas.
     * @param {CanvasRenderingContext2D} ctx - the drawing context of the canvas.
     */
    draw(ctx) {
        if (this.img && this.img instanceof HTMLImageElement) {
            ctx.drawImage(this.img, this.X, this.Y, this.width, this.height);
        }
        this.drawCollisionFrame(ctx);
    }


    /**
     * draws the collision frame around the object.
     * @param {CanvasRenderingContext2D} ctx - the canvas rendering context.
     */
    drawCollisionFrame(ctx) {
        if (MovableObject.debugMode && (this instanceof Character ||
            this instanceof Candle || this instanceof Plant ||
            this instanceof Spider || this instanceof Spinner ||
            this instanceof Spirit || this instanceof Squid ||
            this instanceof Endboss || this instanceof ThrowableObject)) {
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = '#ff79c6';
            ctx.rect(this.X, this.Y, this.width, this.height);
            ctx.stroke();
        }
    }


    /**
     * checks if the object is colliding with another movable object.
     * @param {MovableObject} moveObj - the other movable object.
     * @param {number} [offsetX=0] - the x-axis offset.
     * @param {number} [offsetY=0] - the y-axis offset.
     * @returns {boolean} true if the objects are colliding, false otherwise.
     */
    isColliding(moveObj, offsetX = 0, offsetY = 0) {
        return (
            this.X + this.width - offsetX > moveObj.X + offsetX &&
            this.X + offsetX < moveObj.X + moveObj.width - offsetX &&
            this.Y + this.height - offsetY > moveObj.Y + offsetY &&
            this.Y + offsetY < moveObj.Y + moveObj.height - offsetY
        );
    }

}