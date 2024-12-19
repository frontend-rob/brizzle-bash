class BombObject extends MovableObject {

    width = 40;
    height = 40;

    constructor(posX, posY) {
        super().loadImage('../assets/img/ornaments/collectable-bomb.png');
        this.X = posX;
        this.Y = posY;
    }

}
