/**
 * represents an enemy object.
 * @extends Enemy
 */
class Squid extends Enemy {

    Y = 304;
    width = 136;
    height = 120;
    collisionOffsetX = 15;
    collisionOffsetY = 0;


    /**
     * creates an instance of Squid.
     * @param {number} posX - the initial x position of the squid.
     * @param {number} varSpeedX - the speed of the squid along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(SQUID_IMAGES.WALK[0]);
        this.loadImages(SQUID_IMAGES.WALK);
        this.name = "Shadow Squid";
        this.X = posX;
        this.speedX = varSpeedX;
        this.oscillateY = 304;
        this.amplitude = 10;
        this.frequency = 0.25;
        this.time = 0;
        this.animate();
    }


    /**
     * animates the squid by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            if (this.shouldAnimate()) {
                this.moveLeftOscillate();
                this.playAnimation(SQUID_IMAGES.WALK);
            }
        }, 1000 / 30);
    }
}
