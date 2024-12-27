class DrawableObject {

    img;
    currentImage = 0;
    imageCache = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.X, this.Y, this.width, this.height);
        this.drawCollisionFrame(ctx);
    }


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


    isColliding(moveObj, offsetX = 0, offsetY = 0) {
        return (
            this.X + this.width - offsetX > moveObj.X + offsetX &&
            this.X + offsetX < moveObj.X + moveObj.width - offsetX &&
            this.Y + this.height - offsetY > moveObj.Y + offsetY &&
            this.Y + offsetY < moveObj.Y + moveObj.height - offsetY
        );
    }
}