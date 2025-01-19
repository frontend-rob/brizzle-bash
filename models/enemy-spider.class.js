/**
 * represents an enemy object.
 * @extends Enemy
 */
class Spider extends Enemy {
    
    Y = 320;
    width = 142;
    height = 125;
    collisionOffsetX = 10;
    collisionOffsetY = 10;


    /**
     * creates an instance of Spider.
     * @param {number} posX - the initial x position of the spider.
     * @param {number} varSpeedX - the speed of the spider along the x-axis.
     */
    constructor(posX, varSpeedX) {
        super().loadImage(SPIDER_IMAGES.WALK[0]);
        this.loadImages(SPIDER_IMAGES.WALK);
        this.name = "Toxic Widow";
        this.X = posX;
        this.speedX = varSpeedX;
        this.animate();
    }


    /**
     * animates the spider by moving it left and playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
            this.playAnimation(SPIDER_IMAGES.WALK);
        }, 1000 / 60);
    }
}