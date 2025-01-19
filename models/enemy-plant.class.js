/**
 * represents an enemy object.
 * @extends Enemy
 */
class Plant extends Enemy {

    Y = 304;
    width = 171;
    height = 150;
    collisionOffsetX = 20;
    collisionOffsetY = 20;


    /**
     * creates an instance of Plant.
     * @param {number} posX - the initial x position of the plant.
     */
    constructor(posX) {
        super().loadImage(PLANT_IMAGES.IDLE[0]);
        this.loadImages(PLANT_IMAGES.IDLE);
        this.X = posX;
        this.name = "Flesh Lotus";
        this.animate();
    }


    /**
     * animates the plant by playing the walk animation.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(PLANT_IMAGES.IDLE);
        }, 1000 / 35);
    }
}