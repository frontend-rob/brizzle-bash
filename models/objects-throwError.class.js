class ErrorImageObject extends MovableObject {
    constructor(X, Y) {
        super().loadImage('../assets/img/ornaments/throw-error.png');
        this.X = X;
        this.Y = Y;
        this.width = 64;
        this.height = 64;
        this.setPosition(X, Y);
    }

    setPosition(X, Y) {
        this.X = X + 88;
        this.Y = Y - 24;
    }
}
