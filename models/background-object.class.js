class BackgroundObject extends MovableObject {
        
    width = 1600;
    height = 480;

    constructor(imgaePath, X) {
        super().loadImage(imgaePath);
        this.X = X;
        this.Y = 480 - this.height;
    };
}