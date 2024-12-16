class Spinner extends MovableObject {

    Y = 180;
    width = 114;
    height = 100;
    amplitude = 4;
    frequency = 0.005;
    direction = 1;
    rangeX = 300;


    IMAGES_WALK = [
        '../assets/img/monsters/spinner/spi-00.png',
        '../assets/img/monsters/spinner/spi-01.png',
        '../assets/img/monsters/spinner/spi-02.png',
        '../assets/img/monsters/spinner/spi-03.png',
        '../assets/img/monsters/spinner/spi-04.png',
        '../assets/img/monsters/spinner/spi-05.png',
        '../assets/img/monsters/spinner/spi-06.png',
        '../assets/img/monsters/spinner/spi-07.png',
        '../assets/img/monsters/spinner/spi-08.png',
        '../assets/img/monsters/spinner/spi-09.png',
        '../assets/img/monsters/spinner/spi-10.png',
        '../assets/img/monsters/spinner/spi-11.png',
        '../assets/img/monsters/spinner/spi-12.png',
        '../assets/img/monsters/spinner/spi-13.png',
        '../assets/img/monsters/spinner/spi-14.png',
        '../assets/img/monsters/spinner/spi-15.png',
        '../assets/img/monsters/spinner/spi-16.png',
        '../assets/img/monsters/spinner/spi-17.png',
        '../assets/img/monsters/spinner/spi-18.png',
        '../assets/img/monsters/spinner/spi-19.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.X = 420 + Math.random() * 500;
        this.speedX = 1.5 + Math.random() * 0.5;
        this.animate();
    };


    animate() {
        setInterval(() => {
            this.moveSinus();
            this.playAnimation(this.IMAGES_WALK);
        }, 1000 / 60);

    }


    moveSinus() {
        if (!this.world || !this.world.isPaused) {
            this.Y += Math.sin(this.frequency * Date.now()) * this.amplitude;
            this.X += this.speedX * this.direction;

            if (this.X > 420 + this.rangeX || this.X < 420) {
                this.direction *= -1;
            }
        }
    }


}