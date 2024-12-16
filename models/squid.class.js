class Squid extends MovableObject {

    Y = 304;
    width = 136;
    height = 120;


    IMAGES_WALK = [
        '../assets/img/monsters/squid/squ-00.png',
        '../assets/img/monsters/squid/squ-01.png',
        '../assets/img/monsters/squid/squ-02.png',
        '../assets/img/monsters/squid/squ-03.png',
        '../assets/img/monsters/squid/squ-04.png',
        '../assets/img/monsters/squid/squ-05.png',
        '../assets/img/monsters/squid/squ-06.png',
        '../assets/img/monsters/squid/squ-07.png',
        '../assets/img/monsters/squid/squ-08.png',
        '../assets/img/monsters/squid/squ-09.png',
        '../assets/img/monsters/squid/squ-10.png',
        '../assets/img/monsters/squid/squ-11.png',
        '../assets/img/monsters/squid/squ-12.png',
        '../assets/img/monsters/squid/squ-13.png',
        '../assets/img/monsters/squid/squ-14.png',
        '../assets/img/monsters/squid/squ-15.png',
        '../assets/img/monsters/squid/squ-16.png',
        '../assets/img/monsters/squid/squ-17.png',
        '../assets/img/monsters/squid/squ-18.png',
        '../assets/img/monsters/squid/squ-19.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.X = 420 + Math.random() * 500;
        this.speedX = 2 + Math.random() * 1.5;
        this.oscillateY = 304;
        this.amplitude = 10;
        this.frequency = 0.1;
        this.time = 0;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeftOscillate();
            this.playAnimation(this.IMAGES_WALK);
        }, 1000 / 30);
    }

    
}
