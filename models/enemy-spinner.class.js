/**
 * represents an enemy object.
 * @extends Enemy
 */
class Spinner extends Enemy {

    width = 114;
    height = 100;
    amplitude = 4;
    frequency = 0.005;
    direction = 1;
    rangeX = 300;
    collisionOffsetX = 5;
    collisionOffsetY = 5;
    startX;


    /**
     * creates an instance of Spinner.
     * @param {number} posX - the initial x position of the spinner.
     * @param {number} posY - the initial y position of the spinner.
     * @param {number} varSpeedX - the speed of the spinner along the x-axis.
     */
    constructor(posX, posY, varSpeedX) {
        super().loadImage(SPINNER_IMAGES.WALK[0]);
        this.loadImages(SPINNER_IMAGES.WALK);
        this.name = "Ocular Spinner";
        this.X = posX;
        this.Y = posY;
        this.speedX = varSpeedX;
        this.startX = posX;
        this.animate();
    }


    /**
     * animates the squid by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            if (this.shouldAnimate()) {
                this.moveSinus();
                this.playAnimation(SPINNER_IMAGES.WALK);
            }
        }, 1000 / 60);
    }
}