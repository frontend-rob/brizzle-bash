/**
 * represents an enemy object.
 * @extends Enemy
 */
class Candle extends Enemy {

    Y = 296;
    width = 171;
    height = 150;
    collisionOffsetX = 20;
    collisionOffsetY = 20;


    /**
     * creates an instance of Candle.
     * @param {number} posX - the initial x position of the candle.
     * @param {number} varSpeedX - the speed of the candle along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(CANDLE_IMAGES.WALK[0]);
        this.loadImages(CANDLE_IMAGES.WALK);
        this.X = posX;
        this.speedX = varSpeedX;
        this.name = "Candle Bug";
        this.animate();
    }


    /**
     * animates the candle by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(CANDLE_IMAGES.WALK);
        }, 1000 / 60);
    }
}