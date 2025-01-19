/**
 * represents an enemy object.
 * @extends Enemy
 */
class Spirit extends Enemy {
    
    width = 171;
    height = 150;
    collisionOffsetX = 0;
    collisionOffsetY = 20;


    /**
     * creates an instance of Spirit.
     * @param {number} posX - the initial x position of the spirit.
     * @param {number} posY - the initial y position of the spirit.
     * @param {number} varSpeedX - the speed of the spirit along the x-axis.
     */
    constructor(posX, posY, varSpeedX) {
        super().loadImage(SPIRIT_IMAGES.WALK[0]);
        this.loadImages(SPIRIT_IMAGES.WALK);
        this.name = "Soul Phantom";
        this.X = posX;
        this.speedX = varSpeedX;
        this.oscillateY = posY;
        this.amplitude = 10;
        this.frequency = 0.075;
        this.time = 0;
        this.animate();
    }


    /**
     * animates the spirit by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeftOscillate();
            this.playAnimation(SPIRIT_IMAGES.WALK);
        }, 1000 / 45);
    }
}